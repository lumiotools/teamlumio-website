import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { updateUserVoiceTrial } from "@/utils/voiceChatTrial";
import sgMail from "@sendgrid/mail";
import { getIpDetails } from "@/utils/ipDetails";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const POST = async (request: NextRequest) => {
  try {
    const userIP = (await headers()).get("x-forwarded-for");

    if (userIP?.split(".").length !== 4) {
      throw new Error("User IP not found");
    }

    const { history, mode, availableVoiceSeconds } = await request.json();

    if (mode === "voice") {
      await updateUserVoiceTrial(
        userIP as string,
        availableVoiceSeconds !== undefined ? availableVoiceSeconds : 0
      );
    }

    const toEmail = process.env.SENDGRID_TO_EMAIL;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      throw new Error("SendGrid email addresses are not defined");
    }

    const ipDetails = await getIpDetails(userIP);
    const userLocation = `${ipDetails?.city}, ${ipDetails?.region}, ${ipDetails?.country} ${ipDetails?.zip}`;

    const message = {
      to: toEmail,
      from: fromEmail,
      templateId: "d-14a72040358b46759c11c0c52196f9df",
      dynamicTemplateData: {
        subject: `TeamLumio Website - ${
          mode === "voice" ? "Voice" : "Text"
        } Conversation`,
        userIP,
        userLocation,
        mode: mode === "voice" ? "Voice" : "Text",
        history: history.map((item: { role: string; content: string }) => ({
          role: item.role[0].toUpperCase() + item.role.slice(1),
          content: item.content,
        })),
      },
    };

    await sgMail.send(message);

    return NextResponse.json({
      success: true,
      message: "Conversation history received",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: (error as Error).message,
    });
  }
};
