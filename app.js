// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

// Request notification permission
if ('Notification' in window) {
  Notification.requestPermission();
}

function setReminder() {
  const namaUbat = document.getElementById("namaUbat").value;
  const masa = document.getElementById("masaUbat").value;

  if (!namaUbat || !masa) {
    alert("Sila isi nama ubat dan masa");
    return;
  }

  const now = new Date();
  const reminderTime = new Date();
  const [hour, minute] = masa.split(":");

  reminderTime.setHours(hour, minute, 0);

  let delay = reminderTime.getTime() - now.getTime();
  if (delay < 0) delay += 24 * 60 * 60 * 1000;

  setTimeout(() => {
    new Notification("Peringatan Ambil Ubat", {
      body: `Masa untuk ambil ubat: ${namaUbat}`,
      icon: "icon.png"
    });
  }, delay);

  alert("Reminder berjaya ditetapkan");
}
