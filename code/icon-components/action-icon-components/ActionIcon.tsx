import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { add_contact_icon } from ".//add_contact_icon"
import { add_file_icon } from ".//add_file_icon"
import { add_photo_video_icon } from ".//add_photo_video_icon"
import { add_relationship_icon } from ".//add_relationship_icon"
import { announcement_icon } from ".//announcement_icon"
import { apex_icon } from ".//apex_icon"
import { approval_icon } from ".//approval_icon"
import { back_icon } from ".//back_icon"
import { call_icon } from ".//call_icon"
import { canvas_icon } from ".//canvas_icon"
import { change_owner_icon } from ".//change_owner_icon"
import { change_record_type_icon } from ".//change_record_type_icon"
import { check_icon } from ".//check_icon"
import { clone_icon } from ".//clone_icon"
import { close_icon } from ".//close_icon"
import { defer_icon } from ".//defer_icon"
import { delete_icon } from ".//delete_icon"
import { description_icon } from ".//description_icon"
import { dial_in_icon } from ".//dial_in_icon"
import { download_icon } from ".//download_icon"
import { edit_groups_icon } from ".//edit_groups_icon"
import { edit_icon } from ".//edit_icon"
import { edit_relationship_icon } from ".//edit_relationship_icon"
import { email_icon } from ".//email_icon"
import { fallback_icon } from ".//fallback_icon"
import { filter_icon } from ".//filter_icon"
import { flow_icon } from ".//flow_icon"
import { follow_icon } from ".//follow_icon"
import { following_icon } from ".//following_icon"
import { freeze_user_icon } from ".//freeze_user_icon"
import { goal_icon } from ".//goal_icon"
import { google_news_icon } from ".//google_news_icon"
import { info_icon } from ".//info_icon"
import { join_group_icon } from ".//join_group_icon"
import { lead_convert_icon } from ".//lead_convert_icon"
import { leave_group_icon } from ".//leave_group_icon"
import { log_a_call_icon } from ".//log_a_call_icon"
import { log_event_icon } from ".//log_event_icon"
import { manage_perm_sets_icon } from ".//manage_perm_sets_icon"
import { map_icon } from ".//map_icon"
import { more_icon } from ".//more_icon"
import { new_account_icon } from ".//new_account_icon"
import { new_campaign_icon } from ".//new_campaign_icon"
import { new_case_icon } from ".//new_case_icon"
import { new_child_case_icon } from ".//new_child_case_icon"
import { new_contact_icon } from ".//new_contact_icon"
import { new_custom1_icon } from ".//new_custom1_icon"
import { new_custom10_icon } from ".//new_custom10_icon"
import { new_custom100_icon } from ".//new_custom100_icon"
import { new_custom11_icon } from ".//new_custom11_icon"
import { new_custom12_icon } from ".//new_custom12_icon"
import { new_custom13_icon } from ".//new_custom13_icon"
import { new_custom14_icon } from ".//new_custom14_icon"
import { new_custom15_icon } from ".//new_custom15_icon"
import { new_custom16_icon } from ".//new_custom16_icon"
import { new_custom17_icon } from ".//new_custom17_icon"
import { new_custom18_icon } from ".//new_custom18_icon"
import { new_custom19_icon } from ".//new_custom19_icon"
import { new_custom2_icon } from ".//new_custom2_icon"
import { new_custom20_icon } from ".//new_custom20_icon"
import { new_custom21_icon } from ".//new_custom21_icon"
import { new_custom22_icon } from ".//new_custom22_icon"
import { new_custom23_icon } from ".//new_custom23_icon"
import { new_custom24_icon } from ".//new_custom24_icon"
import { new_custom25_icon } from ".//new_custom25_icon"
import { new_custom26_icon } from ".//new_custom26_icon"
import { new_custom27_icon } from ".//new_custom27_icon"
import { new_custom28_icon } from ".//new_custom28_icon"
import { new_custom29_icon } from ".//new_custom29_icon"
import { new_custom3_icon } from ".//new_custom3_icon"
import { new_custom30_icon } from ".//new_custom30_icon"
import { new_custom31_icon } from ".//new_custom31_icon"
import { new_custom32_icon } from ".//new_custom32_icon"
import { new_custom33_icon } from ".//new_custom33_icon"
import { new_custom34_icon } from ".//new_custom34_icon"
import { new_custom35_icon } from ".//new_custom35_icon"
import { new_custom36_icon } from ".//new_custom36_icon"
import { new_custom37_icon } from ".//new_custom37_icon"
import { new_custom38_icon } from ".//new_custom38_icon"
import { new_custom39_icon } from ".//new_custom39_icon"
import { new_custom4_icon } from ".//new_custom4_icon"
import { new_custom40_icon } from ".//new_custom40_icon"
import { new_custom41_icon } from ".//new_custom41_icon"
import { new_custom42_icon } from ".//new_custom42_icon"
import { new_custom43_icon } from ".//new_custom43_icon"
import { new_custom44_icon } from ".//new_custom44_icon"
import { new_custom45_icon } from ".//new_custom45_icon"
import { new_custom46_icon } from ".//new_custom46_icon"
import { new_custom47_icon } from ".//new_custom47_icon"
import { new_custom48_icon } from ".//new_custom48_icon"
import { new_custom49_icon } from ".//new_custom49_icon"
import { new_custom5_icon } from ".//new_custom5_icon"
import { new_custom50_icon } from ".//new_custom50_icon"
import { new_custom51_icon } from ".//new_custom51_icon"
import { new_custom52_icon } from ".//new_custom52_icon"
import { new_custom53_icon } from ".//new_custom53_icon"
import { new_custom54_icon } from ".//new_custom54_icon"
import { new_custom55_icon } from ".//new_custom55_icon"
import { new_custom56_icon } from ".//new_custom56_icon"
import { new_custom57_icon } from ".//new_custom57_icon"
import { new_custom58_icon } from ".//new_custom58_icon"
import { new_custom59_icon } from ".//new_custom59_icon"
import { new_custom6_icon } from ".//new_custom6_icon"
import { new_custom60_icon } from ".//new_custom60_icon"
import { new_custom61_icon } from ".//new_custom61_icon"
import { new_custom62_icon } from ".//new_custom62_icon"
import { new_custom63_icon } from ".//new_custom63_icon"
import { new_custom64_icon } from ".//new_custom64_icon"
import { new_custom65_icon } from ".//new_custom65_icon"
import { new_custom66_icon } from ".//new_custom66_icon"
import { new_custom67_icon } from ".//new_custom67_icon"
import { new_custom68_icon } from ".//new_custom68_icon"
import { new_custom69_icon } from ".//new_custom69_icon"
import { new_custom7_icon } from ".//new_custom7_icon"
import { new_custom70_icon } from ".//new_custom70_icon"
import { new_custom71_icon } from ".//new_custom71_icon"
import { new_custom72_icon } from ".//new_custom72_icon"
import { new_custom73_icon } from ".//new_custom73_icon"
import { new_custom74_icon } from ".//new_custom74_icon"
import { new_custom75_icon } from ".//new_custom75_icon"
import { new_custom76_icon } from ".//new_custom76_icon"
import { new_custom77_icon } from ".//new_custom77_icon"
import { new_custom78_icon } from ".//new_custom78_icon"
import { new_custom79_icon } from ".//new_custom79_icon"
import { new_custom8_icon } from ".//new_custom8_icon"
import { new_custom80_icon } from ".//new_custom80_icon"
import { new_custom81_icon } from ".//new_custom81_icon"
import { new_custom82_icon } from ".//new_custom82_icon"
import { new_custom83_icon } from ".//new_custom83_icon"
import { new_custom84_icon } from ".//new_custom84_icon"
import { new_custom85_icon } from ".//new_custom85_icon"
import { new_custom86_icon } from ".//new_custom86_icon"
import { new_custom87_icon } from ".//new_custom87_icon"
import { new_custom88_icon } from ".//new_custom88_icon"
import { new_custom89_icon } from ".//new_custom89_icon"
import { new_custom9_icon } from ".//new_custom9_icon"
import { new_custom90_icon } from ".//new_custom90_icon"
import { new_custom91_icon } from ".//new_custom91_icon"
import { new_custom92_icon } from ".//new_custom92_icon"
import { new_custom93_icon } from ".//new_custom93_icon"
import { new_custom94_icon } from ".//new_custom94_icon"
import { new_custom95_icon } from ".//new_custom95_icon"
import { new_custom96_icon } from ".//new_custom96_icon"
import { new_custom97_icon } from ".//new_custom97_icon"
import { new_custom98_icon } from ".//new_custom98_icon"
import { new_custom99_icon } from ".//new_custom99_icon"
import { new_event_icon } from ".//new_event_icon"
import { new_group_icon } from ".//new_group_icon"
import { new_icon } from ".//new_icon"
import { new_lead_icon } from ".//new_lead_icon"
import { new_note_icon } from ".//new_note_icon"
import { new_notebook_icon } from ".//new_notebook_icon"
import { new_opportunity_icon } from ".//new_opportunity_icon"
import { new_person_account_icon } from ".//new_person_account_icon"
import { new_task_icon } from ".//new_task_icon"
import { password_unlock_icon } from ".//password_unlock_icon"
import { preview_icon } from ".//preview_icon"
import { priority_icon } from ".//priority_icon"
import { question_post_action_icon } from ".//question_post_action_icon"
import { quote_icon } from ".//quote_icon"
import { recall_icon } from ".//recall_icon"
import { record_icon } from ".//record_icon"
import { refresh_icon } from ".//refresh_icon"
import { reject_icon } from ".//reject_icon"
import { remove_icon } from ".//remove_icon"
import { remove_relationship_icon } from ".//remove_relationship_icon"
import { reset_password_icon } from ".//reset_password_icon"
import { script_icon } from ".//script_icon"
import { share_file_icon } from ".//share_file_icon"
import { share_icon } from ".//share_icon"
import { share_link_icon } from ".//share_link_icon"
import { share_poll_icon } from ".//share_poll_icon"
import { share_post_icon } from ".//share_post_icon"
import { share_thanks_icon } from ".//share_thanks_icon"
import { sort_icon } from ".//sort_icon"
import { submit_for_approval_icon } from ".//submit_for_approval_icon"
import { update_icon } from ".//update_icon"
import { update_status_icon } from ".//update_status_icon"
import { upload_icon } from ".//upload_icon"
import { user_activation_icon } from ".//user_activation_icon"
import { user_icon } from ".//user_icon"
import { view_relationship_icon } from ".//view_relationship_icon"
import { web_link_icon } from ".//web_link_icon"

const icons = {
    add_contact: add_contact_icon,
    add_file: add_file_icon,
    add_photo_video: add_photo_video_icon,
    add_relationship: add_relationship_icon,
    announcement: announcement_icon,
    apex: apex_icon,
    approval: approval_icon,
    back: back_icon,
    call: call_icon,
    canvas: canvas_icon,
    change_owner: change_owner_icon,
    change_record_type: change_record_type_icon,
    check: check_icon,
    clone: clone_icon,
    close: close_icon,
    defer: defer_icon,
    delete: delete_icon,
    description: description_icon,
    dial_in: dial_in_icon,
    download: download_icon,
    edit_groups: edit_groups_icon,
    edit: edit_icon,
    edit_relationship: edit_relationship_icon,
    email: email_icon,
    fallback: fallback_icon,
    filter: filter_icon,
    flow: flow_icon,
    follow: follow_icon,
    following: following_icon,
    freeze_user: freeze_user_icon,
    goal: goal_icon,
    google_news: google_news_icon,
    info: info_icon,
    join_group: join_group_icon,
    lead_convert: lead_convert_icon,
    leave_group: leave_group_icon,
    log_a_call: log_a_call_icon,
    log_event: log_event_icon,
    manage_perm_sets: manage_perm_sets_icon,
    map: map_icon,
    more: more_icon,
    new_account: new_account_icon,
    new_campaign: new_campaign_icon,
    new_case: new_case_icon,
    new_child_case: new_child_case_icon,
    new_contact: new_contact_icon,
    new_custom1: new_custom1_icon,
    new_custom10: new_custom10_icon,
    new_custom100: new_custom100_icon,
    new_custom11: new_custom11_icon,
    new_custom12: new_custom12_icon,
    new_custom13: new_custom13_icon,
    new_custom14: new_custom14_icon,
    new_custom15: new_custom15_icon,
    new_custom16: new_custom16_icon,
    new_custom17: new_custom17_icon,
    new_custom18: new_custom18_icon,
    new_custom19: new_custom19_icon,
    new_custom2: new_custom2_icon,
    new_custom20: new_custom20_icon,
    new_custom21: new_custom21_icon,
    new_custom22: new_custom22_icon,
    new_custom23: new_custom23_icon,
    new_custom24: new_custom24_icon,
    new_custom25: new_custom25_icon,
    new_custom26: new_custom26_icon,
    new_custom27: new_custom27_icon,
    new_custom28: new_custom28_icon,
    new_custom29: new_custom29_icon,
    new_custom3: new_custom3_icon,
    new_custom30: new_custom30_icon,
    new_custom31: new_custom31_icon,
    new_custom32: new_custom32_icon,
    new_custom33: new_custom33_icon,
    new_custom34: new_custom34_icon,
    new_custom35: new_custom35_icon,
    new_custom36: new_custom36_icon,
    new_custom37: new_custom37_icon,
    new_custom38: new_custom38_icon,
    new_custom39: new_custom39_icon,
    new_custom4: new_custom4_icon,
    new_custom40: new_custom40_icon,
    new_custom41: new_custom41_icon,
    new_custom42: new_custom42_icon,
    new_custom43: new_custom43_icon,
    new_custom44: new_custom44_icon,
    new_custom45: new_custom45_icon,
    new_custom46: new_custom46_icon,
    new_custom47: new_custom47_icon,
    new_custom48: new_custom48_icon,
    new_custom49: new_custom49_icon,
    new_custom5: new_custom5_icon,
    new_custom50: new_custom50_icon,
    new_custom51: new_custom51_icon,
    new_custom52: new_custom52_icon,
    new_custom53: new_custom53_icon,
    new_custom54: new_custom54_icon,
    new_custom55: new_custom55_icon,
    new_custom56: new_custom56_icon,
    new_custom57: new_custom57_icon,
    new_custom58: new_custom58_icon,
    new_custom59: new_custom59_icon,
    new_custom6: new_custom6_icon,
    new_custom60: new_custom60_icon,
    new_custom61: new_custom61_icon,
    new_custom62: new_custom62_icon,
    new_custom63: new_custom63_icon,
    new_custom64: new_custom64_icon,
    new_custom65: new_custom65_icon,
    new_custom66: new_custom66_icon,
    new_custom67: new_custom67_icon,
    new_custom68: new_custom68_icon,
    new_custom69: new_custom69_icon,
    new_custom7: new_custom7_icon,
    new_custom70: new_custom70_icon,
    new_custom71: new_custom71_icon,
    new_custom72: new_custom72_icon,
    new_custom73: new_custom73_icon,
    new_custom74: new_custom74_icon,
    new_custom75: new_custom75_icon,
    new_custom76: new_custom76_icon,
    new_custom77: new_custom77_icon,
    new_custom78: new_custom78_icon,
    new_custom79: new_custom79_icon,
    new_custom8: new_custom8_icon,
    new_custom80: new_custom80_icon,
    new_custom81: new_custom81_icon,
    new_custom82: new_custom82_icon,
    new_custom83: new_custom83_icon,
    new_custom84: new_custom84_icon,
    new_custom85: new_custom85_icon,
    new_custom86: new_custom86_icon,
    new_custom87: new_custom87_icon,
    new_custom88: new_custom88_icon,
    new_custom89: new_custom89_icon,
    new_custom9: new_custom9_icon,
    new_custom90: new_custom90_icon,
    new_custom91: new_custom91_icon,
    new_custom92: new_custom92_icon,
    new_custom93: new_custom93_icon,
    new_custom94: new_custom94_icon,
    new_custom95: new_custom95_icon,
    new_custom96: new_custom96_icon,
    new_custom97: new_custom97_icon,
    new_custom98: new_custom98_icon,
    new_custom99: new_custom99_icon,
    new_event: new_event_icon,
    new_group: new_group_icon,
    new: new_icon,
    new_lead: new_lead_icon,
    new_note: new_note_icon,
    new_notebook: new_notebook_icon,
    new_opportunity: new_opportunity_icon,
    new_person_account: new_person_account_icon,
    new_task: new_task_icon,
    password_unlock: password_unlock_icon,
    preview: preview_icon,
    priority: priority_icon,
    question_post_action: question_post_action_icon,
    quote: quote_icon,
    recall: recall_icon,
    record: record_icon,
    refresh: refresh_icon,
    reject: reject_icon,
    remove: remove_icon,
    remove_relationship: remove_relationship_icon,
    reset_password: reset_password_icon,
    script: script_icon,
    share_file: share_file_icon,
    share: share_icon,
    share_link: share_link_icon,
    share_poll: share_poll_icon,
    share_post: share_post_icon,
    share_thanks: share_thanks_icon,
    sort: sort_icon,
    submit_for_approval: submit_for_approval_icon,
    update: update_icon,
    update_status: update_status_icon,
    upload: upload_icon,
    user_activation: user_activation_icon,
    user: user_icon,
    view_relationship: view_relationship_icon,
    web_link: web_link_icon,
}

export function ActionIcon(props) {
    const NamedIcon = icons[props.name]
    return <NamedIcon {...props} />
}

addPropertyControls(ActionIcon, {
    fill: {
        type: ControlType.Color,
        title: "Fill",
        defaultValue: "#ffffff",
    },
    name: {
        type: ControlType.Enum,
        options: [
            "add_contact",
            "add_file",
            "add_photo_video",
            "add_relationship",
            "announcement",
            "apex",
            "approval",
            "back",
            "call",
            "canvas",
            "change_owner",
            "change_record_type",
            "check",
            "clone",
            "close",
            "defer",
            "delete",
            "description",
            "dial_in",
            "download",
            "edit_groups",
            "edit",
            "edit_relationship",
            "email",
            "fallback",
            "filter",
            "flow",
            "follow",
            "following",
            "freeze_user",
            "goal",
            "google_news",
            "info",
            "join_group",
            "lead_convert",
            "leave_group",
            "log_a_call",
            "log_event",
            "manage_perm_sets",
            "map",
            "more",
            "new_account",
            "new_campaign",
            "new_case",
            "new_child_case",
            "new_contact",
            "new_custom1",
            "new_custom10",
            "new_custom100",
            "new_custom11",
            "new_custom12",
            "new_custom13",
            "new_custom14",
            "new_custom15",
            "new_custom16",
            "new_custom17",
            "new_custom18",
            "new_custom19",
            "new_custom2",
            "new_custom20",
            "new_custom21",
            "new_custom22",
            "new_custom23",
            "new_custom24",
            "new_custom25",
            "new_custom26",
            "new_custom27",
            "new_custom28",
            "new_custom29",
            "new_custom3",
            "new_custom30",
            "new_custom31",
            "new_custom32",
            "new_custom33",
            "new_custom34",
            "new_custom35",
            "new_custom36",
            "new_custom37",
            "new_custom38",
            "new_custom39",
            "new_custom4",
            "new_custom40",
            "new_custom41",
            "new_custom42",
            "new_custom43",
            "new_custom44",
            "new_custom45",
            "new_custom46",
            "new_custom47",
            "new_custom48",
            "new_custom49",
            "new_custom5",
            "new_custom50",
            "new_custom51",
            "new_custom52",
            "new_custom53",
            "new_custom54",
            "new_custom55",
            "new_custom56",
            "new_custom57",
            "new_custom58",
            "new_custom59",
            "new_custom6",
            "new_custom60",
            "new_custom61",
            "new_custom62",
            "new_custom63",
            "new_custom64",
            "new_custom65",
            "new_custom66",
            "new_custom67",
            "new_custom68",
            "new_custom69",
            "new_custom7",
            "new_custom70",
            "new_custom71",
            "new_custom72",
            "new_custom73",
            "new_custom74",
            "new_custom75",
            "new_custom76",
            "new_custom77",
            "new_custom78",
            "new_custom79",
            "new_custom8",
            "new_custom80",
            "new_custom81",
            "new_custom82",
            "new_custom83",
            "new_custom84",
            "new_custom85",
            "new_custom86",
            "new_custom87",
            "new_custom88",
            "new_custom89",
            "new_custom9",
            "new_custom90",
            "new_custom91",
            "new_custom92",
            "new_custom93",
            "new_custom94",
            "new_custom95",
            "new_custom96",
            "new_custom97",
            "new_custom98",
            "new_custom99",
            "new_event",
            "new_group",
            "new",
            "new_lead",
            "new_note",
            "new_notebook",
            "new_opportunity",
            "new_person_account",
            "new_task",
            "password_unlock",
            "preview",
            "priority",
            "question_post_action",
            "quote",
            "recall",
            "record",
            "refresh",
            "reject",
            "remove",
            "remove_relationship",
            "reset_password",
            "script",
            "share_file",
            "share",
            "share_link",
            "share_poll",
            "share_post",
            "share_thanks",
            "sort",
            "submit_for_approval",
            "update",
            "update_status",
            "upload",
            "user_activation",
            "user",
            "view_relationship",
            "web_link",
        ],
    },
})
