import React, { useEffect, useState } from "react";

type BeforeInstallPromptEvent = any;

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [installStatus, setInstallStatus] = useState(
    "Waiting for install prompt..."
  );

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    setInstallStatus(
      `User ${
        outcome === "accepted" ? "accepted" : "dismissed"
      } the install prompt`
    );

    setDeferredPrompt(null);
  };

  return (
    <div className="flex my-36 flex-col items-center justify-center">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Install
      </button>
      <p>{installStatus}</p>
    </div>
  );
};

export default InstallButton;
