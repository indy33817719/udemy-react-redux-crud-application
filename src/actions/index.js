// actionを定義
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// actionをリターンする関数
// view側でインポートさせることで然るべき状態遷移をさせる
export const increment = () => ({
        type: INCREMENT
})

export const decrement = () => ({
        type: DECREMENT
})
