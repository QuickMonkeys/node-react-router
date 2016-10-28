
const orderBy = (list, field) => list.sort((a,b) => {return byField(a,b, field)});

const byField = (a,b, field) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0);

export { orderBy };