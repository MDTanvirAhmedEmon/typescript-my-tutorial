//  Pick 
interface person {
    name: string;
    phone: number;
    married: boolean;
}

type contact = Pick<person, 'name'|'phone'>

// Omit (opposite of Pick)

type contact2 = Omit<person, 'married'> // married bade sob nibe

// Partial 
// to make all properties optional 
type optional = Partial<person>
// Required
// to make all properties required
type required = Required<person>

// Readonly
// to make readonly all properties
const emon: Readonly<person> ={
    name: 'Emon',
    phone: 1846817009,
    married: false,
};

// type myObject = {
//     a: string;
//     b: string;
//     c: string;
// }
// using index signature
type myObject = {
    [key: string]: string; 
    // [key: 'a'|'b'|'c']: string; it has a problem we can't use literal type here
}
const obj: myObject = {
    a: 'a',
    b: 'b',
    c: 'c',
};

// Record 
// type hisObject = Record<string, string>
type hisObject = Record<'a'|'b', string> // we can use literal type in record

const hisObj: hisObject = {
    a: 'a',
    b: 'b',
    // c: 'c', hobena karon literal type use hoise
};

// aro utility type ase zegulo documentation a pawya zabe
// ======================================================