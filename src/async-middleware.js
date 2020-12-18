// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ dispatch, getState }) {
    return next => async action => {
        const {
            actions,
            request,
        } = action

        if (!actions) {
            return next(action)
        }
        const { start, success, error } = actions

        if (!start || !success || !error) {
            throw new Error('Se necesitan 3 acciones')
        }

        if (typeof request !== 'function') {
            throw new Error('request debe ser una function')
        }

        dispatch(start())
        try {
            const result = await request()
            dispatch(success(result))
        } catch (e) {
            dispatch(error(e))
        }

    }
}