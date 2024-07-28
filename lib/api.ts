export const sendContactForm = async (data: any): Promise<void> => {
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to send contact form");
        }
    } catch (error) {
        console.error("Error sending contact form:", error);
    }
};
