import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async url => {
  try {
    let response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    let result = await response.json();
    if (!response.ok) throw new Error(`${result.message} (${response.status})`);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
