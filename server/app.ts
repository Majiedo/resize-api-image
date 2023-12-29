import express, {Request,Response} from 'express';

const app = express();

app.get("/" , (request: Request, responde:Response) => {
	console.log(request.body);
	responde.send({message: "Welcome to resizable api! 👌"})	
})

app.listen(3000, () => {
	console.log("The App has been started!")
})


