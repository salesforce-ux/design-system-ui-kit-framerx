import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { ai_icon } from ".//ai_icon"
import { attachment_icon } from ".//attachment_icon"
import { audio_icon } from ".//audio_icon"
import { box_notes_icon } from ".//box_notes_icon"
import { csv_icon } from ".//csv_icon"
import { eps_icon } from ".//eps_icon"
import { excel_icon } from ".//excel_icon"
import { exe_icon } from ".//exe_icon"
import { flash_icon } from ".//flash_icon"
import { folder_icon } from ".//folder_icon"
import { gdoc_icon } from ".//gdoc_icon"
import { gdocs_icon } from ".//gdocs_icon"
import { gform_icon } from ".//gform_icon"
import { gpres_icon } from ".//gpres_icon"
import { gsheet_icon } from ".//gsheet_icon"
import { html_icon } from ".//html_icon"
import { image_icon } from ".//image_icon"
import { keynote_icon } from ".//keynote_icon"
import { library_folder_icon } from ".//library_folder_icon"
import { link_icon } from ".//link_icon"
import { mp4_icon } from ".//mp4_icon"
import { overlay_icon } from ".//overlay_icon"
import { pack_icon } from ".//pack_icon"
import { pages_icon } from ".//pages_icon"
import { pdf_icon } from ".//pdf_icon"
import { ppt_icon } from ".//ppt_icon"
import { psd_icon } from ".//psd_icon"
import { quip_doc_icon } from ".//quip_doc_icon"
import { quip_sheet_icon } from ".//quip_sheet_icon"
import { rtf_icon } from ".//rtf_icon"
import { slide_icon } from ".//slide_icon"
import { stypi_icon } from ".//stypi_icon"
import { txt_icon } from ".//txt_icon"
import { unknown_icon } from ".//unknown_icon"
import { video_icon } from ".//video_icon"
import { visio_icon } from ".//visio_icon"
import { webex_icon } from ".//webex_icon"
import { word_icon } from ".//word_icon"
import { xml_icon } from ".//xml_icon"
import { zip_icon } from ".//zip_icon"

const icons = {
    ai: ai_icon,
    attachment: attachment_icon,
    audio: audio_icon,
    box_notes: box_notes_icon,
    csv: csv_icon,
    eps: eps_icon,
    excel: excel_icon,
    exe: exe_icon,
    flash: flash_icon,
    folder: folder_icon,
    gdoc: gdoc_icon,
    gdocs: gdocs_icon,
    gform: gform_icon,
    gpres: gpres_icon,
    gsheet: gsheet_icon,
    html: html_icon,
    image: image_icon,
    keynote: keynote_icon,
    library_folder: library_folder_icon,
    link: link_icon,
    mp4: mp4_icon,
    overlay: overlay_icon,
    pack: pack_icon,
    pages: pages_icon,
    pdf: pdf_icon,
    ppt: ppt_icon,
    psd: psd_icon,
    quip_doc: quip_doc_icon,
    quip_sheet: quip_sheet_icon,
    rtf: rtf_icon,
    slide: slide_icon,
    stypi: stypi_icon,
    txt: txt_icon,
    unknown: unknown_icon,
    video: video_icon,
    visio: visio_icon,
    webex: webex_icon,
    word: word_icon,
    xml: xml_icon,
    zip: zip_icon,
}

export function DoctypeIcon(props) {
    const NamedIcon = icons[props.name]
    return <NamedIcon {...props} />
}

addPropertyControls(DoctypeIcon, {
    fill: {
        type: ControlType.Color,
        title: "Fill",
        defaultValue: "#ffffff",
    },
    name: {
        type: ControlType.Enum,
        options: [
            "ai",
            "attachment",
            "audio",
            "box_notes",
            "csv",
            "eps",
            "excel",
            "exe",
            "flash",
            "folder",
            "gdoc",
            "gdocs",
            "gform",
            "gpres",
            "gsheet",
            "html",
            "image",
            "keynote",
            "library_folder",
            "link",
            "mp4",
            "overlay",
            "pack",
            "pages",
            "pdf",
            "ppt",
            "psd",
            "quip_doc",
            "quip_sheet",
            "rtf",
            "slide",
            "stypi",
            "txt",
            "unknown",
            "video",
            "visio",
            "webex",
            "word",
            "xml",
            "zip_icon",
        ],
    },
})
