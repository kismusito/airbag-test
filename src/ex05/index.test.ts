import { shiftCipher } from "./";

test("encrypt sentences", () => {
  expect(shiftCipher("hola", 5)).toBe("mtqf");
  expect(shiftCipher("el trabajo es mio", 0)).toBe("el trabajo es mio");
  expect(shiftCipher("el trabajo es mio", 1)).toBe("fm usbcbkp ft njp");
  expect(shiftCipher("el trabajo es mio", 2)).toBe("gn vtcdclq gu okq");
  expect(shiftCipher("el trabajo es mio", 3)).toBe("ho wudedmr hv plr");
  expect(shiftCipher("el trabajo es mio", 4)).toBe("ip xvefens iw qms");
});
