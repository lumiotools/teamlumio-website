export const getIpDetails = async (ip: string) => {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    if (data.status === "success") {
      return {
        country: data.country,
        region: data.region,
        city: data.city,
        zip: data.zip,
      };
    }
  } catch (error) {
    console.error("Error fetching IP details:", error);
  }
  return null;
};
