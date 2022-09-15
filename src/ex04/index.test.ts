import {blackjack} from './'

test('calculate hand value', () => {
    expect(blackjack(['A','2','K'])).toBe(13)
    expect(blackjack(['2','4'])).toBe(6)
    expect(blackjack(['A','4'])).toBe(15)
    expect(blackjack(['A','K'])).toBe(21)
    expect(blackjack(['A','A','J'])).toBe(12)
    expect(blackjack(['A','A','8'])).toBe(20)
    expect(blackjack(['3','3','9','A','6'])).toBe(22)
})