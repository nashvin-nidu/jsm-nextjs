import books from "../db";

interface Book {
    id: number;
    name: string;
}

interface Request {
    json(): unknown;
}
export async function GET() {
 return Response.json(books);
}

export async function POST(request: Request){
    const book = await request.json() as Book;
    books.push(book);
    return Response.json(books);
}

