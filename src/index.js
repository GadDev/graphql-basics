import { GraphQLServer } from 'graphql-yoga';

// Sacalar Type - String, Boolean, Int, Float, ID
// type definition (application schema)
const typeDefs = `
	type Query {
		bonjour: String!
		name: String!
		location: String!
		bio: String!
		id: ID!
		age: Int!
		employed: Boolean!
		gpa: Float
		title: String!
		price: Float!
		releaseYear: Int
		rating: Float
		inStock: Boolean!
		me: User!
		post: Post!
	}
	type User {
		id: ID!
		name: String!
		email: String!
		age: Int
	}
	type Post {
		id: ID!
		title: String!
		body: String!
		published: Boolean!
	}
`;

// resolvers (function who run to make the query)
const resolvers = {
	Query: {
		bonjour() {
			return 'Bonjour la compagnie, this is my first query';
		},
		name() {
			return 'Alexandre gadaix';
		},
		location() {
			return 'London';
		},
		bio() {
			return "Hello, I'm Alexandre, I'm frontend engineer";
		},
		id() {
			return 'fewgwe3241';
		},
		age() {
			return 38;
		},
		employed() {
			return true;
		},
		gpa() {
			return null;
		},
		title() {
			return 'Lord of Rings';
		},
		price() {
			return 34.54;
		},
		releaseYear() {
			return 2000;
		},
		rating() {
			return 4.5;
		},
		inStock() {
			return false;
		},
		me() {
			return {
				id: '1234567',
				name: 'Alex Gadaix',
				email: 'add@add.com',
				age: 38,
			};
		},
		post() {
			return {
				id: '2345678',
				title: 'My first post',
				body: '',
				published: true,
			};
		},
	},
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
});

server.start((i) => {
	console.log('the server is ready and up to run on port', i.port);
});
