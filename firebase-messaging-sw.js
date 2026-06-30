// Importa os scripts do Firebase direto do Google
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// A SUA configuração do Firebase (Copie do seu index.html)
const firebaseConfig = {
  apiKey: "AIzaSyAdsAHoraoKLtJ25MOZ234BQIlmQrzEWoQ",
  authDomain: "creator-hub-893e2.firebaseapp.com",
  projectId: "creator-hub-893e2",
  storageBucket: "creator-hub-893e2.firebasestorage.app",
  messagingSenderId: "371392322617",
  appId: "1:371392322617:web:9e11ba0338224fbb2281e8"
};

// Inicia o Firebase no background
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Diz ao navegador o que fazer quando a notificação chega (mostra a janelinha)
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Notificação recebida em background ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' // Ícone temporário
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
