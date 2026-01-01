/**
 * Handler functions for the Hero component.
 * These functions handle user interactions like downloading resume and opening social media links.
 */

/**
 * Handles the resume download by fetching the PDF file and triggering a download.
 */
export const handleDownloadResume = async () => {
  try {
    const response = await fetch("/assets/doc/resume/resume.pdf"); // Resume File Path
    if (!response.ok) {
      throw new Error("Failed to fetch the file");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Soffi_Resume.pdf"; // Suggested filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading the file:", error);
    alert("Failed to download the resume. Please try again.");
  }
};

/**
 * Handles the LinkedIn link click by opening the LinkedIn profile in a new tab.
 */
export const handleLinkedInClick = () => {
  const linkedInUrl = "https://linkedin.com/in/a-soffi"; // LinkedIn profile URL
  window.open(linkedInUrl, "_blank");
};

/**
 * Handles the Instagram link click by opening the Instagram profile in a new tab.
 */
export const handleInstagramClick = () => {
  const instagramUrl = "https://www.instagram.com/soffi_optom/profilecard/"; // Replace with actual Instagram profile URL
  window.open(instagramUrl, "_blank");
};
