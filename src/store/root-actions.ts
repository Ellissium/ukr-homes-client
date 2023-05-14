import pageActions from './page/pageFilters.slice'
import * as userActions from './user/user.action'

export const rootActions = {
	...userActions,
	...pageActions
}
