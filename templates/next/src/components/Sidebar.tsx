import React, {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { useRouter } from "next/router";
import { Box, Button, styled } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

type IProps = { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> };

type tabType = {
	title: string;
	href: string;
};

type MenuItemType = {
	title: string;
	children: tabType[];
	icon: React.ReactElement;
};

const StyledButton = styled(Button)`
	background: transparent;
	font-size: 14px;
	font-weight: bold;
	cursor: pointer;
	padding: 8px;
	color: #42526e;
	borderradius: 4px;
	justify-content: flex-start;
	text-transform: capitalize;
	:hover {
		background: transparent;
		color: #019aff;
	}
`;
const StyledListItemButton = styled(Button)`
	background: transparent;
	font-size: 14px;
	font-weight: bold;
	cursor: pointer;
	padding: 8px;
	color: #42526e;
	text-transform: capitalize;
	borderradius: 4px;
	justify-content: flex-start;
	margin-left: 8px;
	:hover {
		background: transparent;
		color: #019aff;
	}
`;

export const menuItems = [
	{
		title: "Example",
		icon: <ConfirmationNumberIcon />,
		children: [
			{
				title: "Example 1",
				href: "/example",
			},
			{
				title: "Example 2",
				href: "/not-found",
			},
		],
	},
];

const styles = {
	sideBar: {
		display: "flex",
		flexDirection: "column" as const,
		padding: "0px 8px",
	},
	sideBarItemContainer: {
		display: "flex",
		flexDirection: "column" as const,
	},
	sideBarItemContainerTitle: {
		fontSize: "14px",
		fontWeight: "bold",
		cursor: "pointer",
		padding: "8px",
		color: "#42526E",
		borderRadius: "4px",
	},
	sideBarItemIcon: {
		minWidth: "40px",
		minHeight: "40px",
		marginRight: "30px",
		borderRadius: "2px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "#F5F5F5",
	},
	sideBarIconButton: {
		px: 0,
	},
};

const SideBarItemContainer = ({
	menuItem,
	openTab,
	setOpenTab,
	setOpen,
}: {
	menuItem: MenuItemType;
	openTab: string;
	setOpenTab: Dispatch<SetStateAction<string>>;
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const router = useRouter();
	return (
		<Box sx={styles.sideBarItemContainer}>
			<StyledButton
				disableElevation
				disableRipple
				sx={styles.sideBarIconButton}
				onClick={() => {
					if (openTab !== menuItem.title) {
						setOpenTab(menuItem.title);
					} else {
						setOpenTab("");
					}
					setOpen(true);
				}}
			>
				<Box sx={styles.sideBarItemIcon}>{menuItem.icon}</Box>
				{menuItem.title}
			</StyledButton>
			<Box
				sx={{
					display: openTab === menuItem.title ? "flex" : "none",
					flexDirection: "column" as const,
				}}
			>
				{menuItem.children.map((tab, index) => (
					<StyledListItemButton
						disableElevation
						disableRipple
						key={index}
						onClick={() => {
							router.push(tab.href);
						}}
					>
						{tab.title}
					</StyledListItemButton>
				))}
			</Box>
		</Box>
	);
};

const SideBar: FC<IProps> = ({ open, setOpen }) => {
	const [openTab, setOpenTab] = useState<string>("");
	useEffect(() => {
		if (!open) {
			setOpenTab("");
		}
	}, [open]);
	return (
		<Box sx={styles.sideBar}>
			{menuItems.map(({ title, children, icon }, index) => {
				return (
					<SideBarItemContainer
						key={index}
						menuItem={{ title, children, icon }}
						setOpenTab={setOpenTab}
						openTab={openTab}
						setOpen={setOpen}
					/>
				);
			})}
		</Box>
	);
};

export default SideBar;
