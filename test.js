import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Charge : 10 utilisateurs simultanés (VUs) pendant 30 secondes
  vus: 10,
  duration: '30s',
};

export default function () {
  // Ta cible
  http.get('http://3.80.221.44/');
  sleep(1);
}