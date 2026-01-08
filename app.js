// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

// Request notification permission
if ('Notification' in window) {
  Notification.requestPermission();
}

// Reminder Function
function setReminder() {
  const namaUbat = document.getElementById("namaUbat").value;
  const masa = document.getElementById("masaUbat").value;

  if (!namaUbat || !masa) {
    alert("Sila isi nama ubat dan masa");
    return;
  }

  const now = new Date();
  const reminderTime = new Date();
  const timeSplit = masa.split(":");

  reminderTime.setHours(timeSplit[0], timeSplit[1], 0);

  let delay = reminderTime.getTime() - now.getTime();
  if (delay < 0) {
    delay += 24 * 60 * 60 * 1000;
  }

  setTimeout(() => {
    new Notification("Peringatan Ambil Ubat", {
      body: "Masa untuk ambil ubat: " + namaUbat,
      icon: "icon.png"
    });
  }, delay);

  alert("Reminder ubat berjaya ditetapkan");
}
