async function CopyToClipBoard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true; // Erfolg
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false; // Fehler
  }
}

export default CopyToClipBoard;
