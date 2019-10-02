import { validate } from 'utils'

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

/**
 * retrieves near caches limited by distance
 * @param {number} distance 
 */

export default function (distance) {

    validate.number(distance, 'distance')

    return (async () => {
        const response = await fetch(`${REACT_APP_API_URL}/caches/${distance}`, {
            method: 'GET',
            headers: { authorization: `bearer ${this.__token__}` }
        })

        if (response.status !== 200) {
            const { error } = await response.json()

            throw Error(error)
        }

        const { caches } = await response.json()

        return caches
    })()
}