// Name export - has many as needed
// default export - has no name YOu can only have one
const name = 'Alex';
const company = 'Qured';
const msg = `Hello, I'm ${name}, I'm working at ${company}`;

const getGreeting = (name, company) => {
	return `Hello, I'm ${name}, I'm working at ${company}`;
};

export { msg, name, getGreeting, company as default };
