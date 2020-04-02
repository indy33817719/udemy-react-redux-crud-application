// readEventsが外部のAPIサーバーにリクエストする
// そのリクエストをするHTTPクライアントをimport
import axios from 'axios'
// actionを定義
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// actionをリターンする関数
// view側でインポートさせることで然るべき状態遷移をさせる
export const readEvents = () => async dispatch => {
        const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
        dispatch({ type: READ_EVENTS, response});
}
