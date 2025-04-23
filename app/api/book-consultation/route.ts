import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      workEmail,
      phone,
      linkedInProfile,
      organizationName,
      organizationSize,
      productServices,
      outcomesToAchieve,
      challengesFaced,
      bookingDate,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !workEmail ||
      !organizationName ||
      !organizationSize ||
      !productServices ||
      !challengesFaced ||
      !bookingDate
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all the required fields",
        },
        {
          status: 400,
        }
      );
    }

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyMCDEdcGrR239hJTTpoD7Xm3XUzxjF_Go2H7eMMrXWU4LpO2WM3qR70mdfFr_UZJHVUA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...body,
          challengesFaced: challengesFaced.join(", "),
        }),
      }
    );

    const responseJson = await response.json();

    if (!responseJson.success) {
      return NextResponse.json(
        {
          success: false,
          message: responseJson.message,
        },
        {
          status: 500,
        }
      );
    } else {
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully",
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
};
