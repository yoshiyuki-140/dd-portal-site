import { Flex, Heading } from "@yamada-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";

const Header = () => {
	return (
		<Flex
			as="header"
			justify={"space-between"}
			alignItems={"center"}
			p={4}
			position={"fixed"}
			w={"full"}
			h={"14"}
		>
			<Flex direction="row" as={Link} href={"/"} alignItems={"center"}>
				<Image
					src="/images/icon-removebg.png"
					alt="Data Dreamers"
					width={50}
					height={50}
				/>
				<Heading as={"h1"} fontWeight={"bold"}>
					Data Dreamers
				</Heading>
			</Flex>
			<Navigation />
		</Flex>
	);
};

export default Header;
