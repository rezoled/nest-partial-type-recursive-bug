import {Field, InterfaceType, ObjectType, PartialType} from "@nestjs/graphql";

@InterfaceType({
	isAbstract: true,
})
class Base {
	@Field()
	baseField:string;
}

@InterfaceType({
	isAbstract: true,
	implements: Base,
})
class Baz extends Base {
	@Field()
	bazField:string;
}

@InterfaceType({
	isAbstract: true,
	implements: Baz,
})
class Bar extends Baz {
	@Field()
	barField:string;
}

@ObjectType({
	implements: Bar,
})
class Foo extends Bar {
	@Field()
	fooField:string;
}

PartialType(Foo);