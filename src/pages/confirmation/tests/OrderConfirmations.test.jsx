import {
	render,
	screen
} from '../../../test-utils/testing-library-utils';
import { server } from '../../../mocks/server'
import { rest } from "msw"

import { OrderConfirmation } from '../OrderConfirmation';

test('error response server for submit order POST error request', () => {
	//override default msw response with error response
	server.resetHandlers([
		rest.post('http://localhost:3030/order', (req,res,ctx) => {
			res(ctx.status(500))
		})
	])
})