import { GraphQLServer } from 'graphql-yoga';

// type definition (application schema)
const typeDefs = `
	type Query {
		bonjour: String!
		name: String!
		location: String!
		bio: String!
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
	},
};

const server = new GraphQLServer({
	typeDefs,
	resolvers,
});

server.start((i) => {
	console.log('the server is ready and up to run on port', i.port);
});
