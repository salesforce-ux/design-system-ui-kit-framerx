import * as React from "react"
import * as System from "@salesforce/design-system-react"
import { ControlType, addPropertyControls } from "framer"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

export function Textarea(props) {
    return (
        <System.Textarea
            {...props}
            style={style}
            errorText={props.error && props.myErrorText}
        />
    )
}

Textarea.defaultProps = {
    width: 350,
    height: 60,
}

addPropertyControls(Textarea, {
    disabled: {
        title: "Disabled",
        defaultValue: false,
        type: ControlType.Boolean,
    },
    error: { title: "Error", defaultValue: false, type: ControlType.Boolean },
    myErrorText: {
        title: "ErrorText",
        defaultValue: false,
        type: ControlType.Boolean,
        hidden(props) {
            return props.error === false
        },
    },
    label: { title: "Label", defaultValue: false, type: ControlType.Boolean },
    placeholder: {
        title: "Placeholder",
        defaultValue: "Please type here",
        type: ControlType.String,
    },
    required: {
        title: "Required",
        defaultValue: false,
        type: ControlType.Boolean,
    },
    // value: { title: "Value", defaultValue: false, type: ControlType.Boolean },
    wrap: {
        title: "Wrap",
        defaultValue: "soft",
        type: ControlType.Enum,
        options: ["soft", "hard"],
        optionTitles: ["Soft", "Hard"],
    },
})
