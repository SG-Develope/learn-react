// 환율 계산 유틸 함수
import axios from "axios";
import type { Currency } from "../types";

/**
 * 환율을 기반으로 통화를 변환합니다.
 *
 * @param amount - 변환할 금액
 * @param from - 변환 전 통화 코드
 * @param to - 변환 후 통화 코드
 * @returns 변환된 금액을 문자열로 반환
 *
 * @example
 * ```ts
 * const result = convertCurrency(1000, 'KRW', 'USD');
 * // '1000 KRW = 0.76 USD'
 * ```
 */

interface ExchangeResponse {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}


async function convertCurrency(amount: number, from: Currency, to: Currency) {
  // https://frankfurter.dev 참고
  const url = `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`;
  console.log(url);
  
  // TODO: 환율 계산 로직 구현
  try {
    const response = (await axios.get<ExchangeResponse>(url)).data;

    //API 호출 시  (amount * respones.amount 안 해도된다 주의하자 승규야)
    const exchangeRate = amount * response.rates[to]

    return exchangeRate;
  } catch (error) {
    console.log(error);
  }
}

export { convertCurrency };
