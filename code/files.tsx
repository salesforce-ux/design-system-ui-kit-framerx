import * as React from "react"
import * as System from "@salesforce/design-system-react"
import { ControlType, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"
import { generateIconPropertyControls } from "./utils/propertyControls"
import { Icon } from "./icon"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

export function Files(props) {
    return (
        <System.Files>
            <System.File
                labels={{
                    title: props.title,
                }}
                icon={
                    <Icon
                        category={props.category}
                        name={props.name}
                        size={props.size}
                    />
                }
                crop={props.crop}
            />
        </System.Files>
    )
}

Files.defaultProps = {
    width: 1000,
    height: 250,
    category: "Action",
}

addPropertyControls(Files, {
    title: {
        type: ControlType.String,
        title: "Title",
        defaultValue: "Proposal.pdf",
    },
    crop: {
        type: ControlType.Enum,
        title: "Crop",
        options: ["16-by-9", "4-by-3", "1-by-1"],
        optionTitles: ["16-by-9", "4-by-3", "1-by-1"],
        defaultValue: "1-by-1",
    },
    category: {
        type: ControlType.Enum,
        options: ["Utility", "Action", "Standard", "Doctype", "Custom"],
        defaultValue: "Action",
    },
    name: {
        type: ControlType.String,
        defaultValue: "add_contact",
    },
    fill: {
        type: ControlType.Color,
        defaultValue: "#fff",
    },
    size: {
        type: ControlType.Enum,
        title: "Size",
        options: ["xx-small", "x-small", "small", "medium", "large"],
        optionTitles: ["XX-Small", "X-Small", "Small", "Medium", "Large"],
        defaultValue: "large",
    },
})
