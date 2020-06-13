import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import "../slds-icon-styles.css"
import { activity_icon } from ".//activity_icon"
import { ad_set_icon } from ".//ad_set_icon"
import { add_icon } from ".//add_icon"
import { adduser_icon } from ".//adduser_icon"
import { advanced_function_icon } from ".//advanced_function_icon"
import { advertising_icon } from ".//advertising_icon"
import { agent_session_icon } from ".//agent_session_icon"
import { alert_icon } from ".//alert_icon"
import { all_icon } from ".//all_icon"
import { anchor_icon } from ".//anchor_icon"
import { animal_and_nature_icon } from ".//animal_and_nature_icon"
import { announcement_icon } from ".//announcement_icon"
import { answer_icon } from ".//answer_icon"
import { answered_twice_icon } from ".//answered_twice_icon"
import { apex_icon } from ".//apex_icon"
import { apex_plugin_icon } from ".//apex_plugin_icon"
import { approval_icon } from ".//approval_icon"
import { apps_icon } from ".//apps_icon"
import { archive_icon } from ".//archive_icon"
import { arrowdown_icon } from ".//arrowdown_icon"
import { arrowup_icon } from ".//arrowup_icon"
import { assignment_icon } from ".//assignment_icon"
import { attach_icon } from ".//attach_icon"
import { automate_icon } from ".//automate_icon"
import { away_icon } from ".//away_icon"
import { back_icon } from ".//back_icon"
import { ban_icon } from ".//ban_icon"
import { block_visitor_icon } from ".//block_visitor_icon"
import { bold_icon } from ".//bold_icon"
import { bookmark_icon } from ".//bookmark_icon"
import { breadcrumbs_icon } from ".//breadcrumbs_icon"
import { broadcast_icon } from ".//broadcast_icon"
import { brush_icon } from ".//brush_icon"
import { bucket_icon } from ".//bucket_icon"
import { builder_icon } from ".//builder_icon"
import { call_icon } from ".//call_icon"
import { campaign_icon } from ".//campaign_icon"
import { cancel_file_request_icon } from ".//cancel_file_request_icon"
import { cancel_transfer_icon } from ".//cancel_transfer_icon"
import { capslock_icon } from ".//capslock_icon"
import { cart_icon } from ".//cart_icon"
import { case_icon } from ".//case_icon"
import { cases_icon } from ".//cases_icon"
import { center_align_text_icon } from ".//center_align_text_icon"
import { change_owner_icon } from ".//change_owner_icon"
import { change_record_type_icon } from ".//change_record_type_icon"
import { chart_icon } from ".//chart_icon"
import { chat_icon } from ".//chat_icon"
import { check_icon } from ".//check_icon"
import { checkin_icon } from ".//checkin_icon"
import { chevrondown_icon } from ".//chevrondown_icon"
import { chevronleft_icon } from ".//chevronleft_icon"
import { chevronright_icon } from ".//chevronright_icon"
import { chevronup_icon } from ".//chevronup_icon"
import { choice_icon } from ".//choice_icon"
import { classic_interface_icon } from ".//classic_interface_icon"
import { clear_icon } from ".//clear_icon"
import { clock_icon } from ".//clock_icon"
import { close_icon } from ".//close_icon"
import { collapse_all_icon } from ".//collapse_all_icon"
import { collection_variable_icon } from ".//collection_variable_icon"
import { color_swatch_icon } from ".//color_swatch_icon"
import { comments_icon } from ".//comments_icon"
import { company_icon } from ".//company_icon"
import { connected_apps_icon } from ".//connected_apps_icon"
import { constant_icon } from ".//constant_icon"
import { contact_request_icon } from ".//contact_request_icon"
import { contract_alt_icon } from ".//contract_alt_icon"
import { contract_icon } from ".//contract_icon"
import { copy_icon } from ".//copy_icon"
import { copy_to_clipboard_icon } from ".//copy_to_clipboard_icon"
import { crossfilter_icon } from ".//crossfilter_icon"
import { currency_icon } from ".//currency_icon"
import { currency_input_icon } from ".//currency_input_icon"
import { custom_apps_icon } from ".//custom_apps_icon"
import { cut_icon } from ".//cut_icon"
import { dash_icon } from ".//dash_icon"
import { database_icon } from ".//database_icon"
import { datadotcom_icon } from ".//datadotcom_icon"
import { date_input_icon } from ".//date_input_icon"
import { date_time_icon } from ".//date_time_icon"
import { dayview_icon } from ".//dayview_icon"
import { delete_icon } from ".//delete_icon"
import { deprecate_icon } from ".//deprecate_icon"
import { description_icon } from ".//description_icon"
import { desktop_console_icon } from ".//desktop_console_icon"
import { desktop_icon } from ".//desktop_icon"
import { dialing_icon } from ".//dialing_icon"
import { dislike_icon } from ".//dislike_icon"
import { display_rich_text_icon } from ".//display_rich_text_icon"
import { display_text_icon } from ".//display_text_icon"
import { dock_panel_icon } from ".//dock_panel_icon"
import { down_icon } from ".//down_icon"
import { download_icon } from ".//download_icon"
import { drag_and_drop_icon } from ".//drag_and_drop_icon"
import { drag_icon } from ".//drag_icon"
import { dynamic_record_choice_icon } from ".//dynamic_record_choice_icon"
import { edit_form_icon } from ".//edit_form_icon"
import { edit_icon } from ".//edit_icon"
import { einstein_icon } from ".//einstein_icon"
import { email_icon } from ".//email_icon"
import { email_open_icon } from ".//email_open_icon"
import { emoji_icon } from ".//emoji_icon"
import { end_call_icon } from ".//end_call_icon"
import { end_chat_icon } from ".//end_chat_icon"
import { end_messaging_session_icon } from ".//end_messaging_session_icon"
import { erect_window_icon } from ".//erect_window_icon"
import { error_icon } from ".//error_icon"
import { event_icon } from ".//event_icon"
import { events_icon } from ".//events_icon"
import { expand_all_icon } from ".//expand_all_icon"
import { expand_alt_icon } from ".//expand_alt_icon"
import { expand_icon } from ".//expand_icon"
import { fallback_icon } from ".//fallback_icon"
import { favorite_icon } from ".//favorite_icon"
import { feed_icon } from ".//feed_icon"
import { file_icon } from ".//file_icon"
import { filter_icon } from ".//filter_icon"
import { filterList_icon } from ".//filterList_icon"
import { flow_icon } from ".//flow_icon"
import { food_and_drink_icon } from ".//food_and_drink_icon"
import { formula_icon } from ".//formula_icon"
import { forward_icon } from ".//forward_icon"
import { forward_up_icon } from ".//forward_up_icon"
import { frozen_icon } from ".//frozen_icon"
import { fulfillment_order_icon } from ".//fulfillment_order_icon"
import { full_width_view_icon } from ".//full_width_view_icon"
import { global_constant_icon } from ".//global_constant_icon"
import { graph_icon } from ".//graph_icon"
import { groups_icon } from ".//groups_icon"
import { help_center_icon } from ".//help_center_icon"
import { help_icon } from ".//help_icon"
import { hide_icon } from ".//hide_icon"
import { hide_mobile_icon } from ".//hide_mobile_icon"
import { hierarchy_icon } from ".//hierarchy_icon"
import { home_icon } from ".//home_icon"
import { identity_icon } from ".//identity_icon"
import { image_icon } from ".//image_icon"
import { in_app_assistant_icon } from ".//in_app_assistant_icon"
import { inbox_icon } from ".//inbox_icon"
import { incoming_call_icon } from ".//incoming_call_icon"
import { info_alt_icon } from ".//info_alt_icon"
import { info_icon } from ".//info_icon"
import { insert_tag_field_icon } from ".//insert_tag_field_icon"
import { insert_template_icon } from ".//insert_template_icon"
import { inspector_panel_icon } from ".//inspector_panel_icon"
import { internal_share_icon } from ".//internal_share_icon"
import { italic_icon } from ".//italic_icon"
import { jump_to_bottom_icon } from ".//jump_to_bottom_icon"
import { jump_to_top_icon } from ".//jump_to_top_icon"
import { justify_text_icon } from ".//justify_text_icon"
import { kanban_icon } from ".//kanban_icon"
import { keyboard_dismiss_icon } from ".//keyboard_dismiss_icon"
import { knowledge_base_icon } from ".//knowledge_base_icon"
import { layers_icon } from ".//layers_icon"
import { layout_icon } from ".//layout_icon"
import { leave_conference_icon } from ".//leave_conference_icon"
import { left_align_text_icon } from ".//left_align_text_icon"
import { left_icon } from ".//left_icon"
import { level_down_icon } from ".//level_down_icon"
import { level_up_icon } from ".//level_up_icon"
import { light_bulb_icon } from ".//light_bulb_icon"
import { lightning_inspector_icon } from ".//lightning_inspector_icon"
import { like_icon } from ".//like_icon"
import { link_icon } from ".//link_icon"
import { linked_icon } from ".//linked_icon"
import { list_icon } from ".//list_icon"
import { listen_icon } from ".//listen_icon"
import { live_message_icon } from ".//live_message_icon"
import { location_icon } from ".//location_icon"
import { lock_icon } from ".//lock_icon"
import { locker_service_api_viewer_icon } from ".//locker_service_api_viewer_icon"
import { locker_service_console_icon } from ".//locker_service_console_icon"
import { log_a_call_icon } from ".//log_a_call_icon"
import { logout_icon } from ".//logout_icon"
import { loop_icon } from ".//loop_icon"
import { lower_flag_icon } from ".//lower_flag_icon"
import { macros_icon } from ".//macros_icon"
import { magicwand_icon } from ".//magicwand_icon"
import { mark_all_as_read_icon } from ".//mark_all_as_read_icon"
import { matrix_icon } from ".//matrix_icon"
import { merge_field_icon } from ".//merge_field_icon"
import { merge_icon } from ".//merge_icon"
import { metrics_icon } from ".//metrics_icon"
import { minimize_window_icon } from ".//minimize_window_icon"
import { missed_call_icon } from ".//missed_call_icon"
import { money_icon } from ".//money_icon"
import { moneybag_icon } from ".//moneybag_icon"
import { monthlyview_icon } from ".//monthlyview_icon"
import { move_icon } from ".//move_icon"
import { multi_picklist_icon } from ".//multi_picklist_icon"
import { multi_select_checkbox_icon } from ".//multi_select_checkbox_icon"
import { muted_icon } from ".//muted_icon"
import { new_direct_message_icon } from ".//new_direct_message_icon"
import { new_icon } from ".//new_icon"
import { new_window_icon } from ".//new_window_icon"
import { news_icon } from ".//news_icon"
import { note_icon } from ".//note_icon"
import { notebook_icon } from ".//notebook_icon"
import { notification_icon } from ".//notification_icon"
import { number_input_icon } from ".//number_input_icon"
import { office365_icon } from ".//office365_icon"
import { offline_cached_icon } from ".//offline_cached_icon"
import { offline_icon } from ".//offline_icon"
import { omni_channel_icon } from ".//omni_channel_icon"
import { open_folder_icon } from ".//open_folder_icon"
import { open_icon } from ".//open_icon"
import { opened_folder_icon } from ".//opened_folder_icon"
import { outbound_call_icon } from ".//outbound_call_icon"
import { outcome_icon } from ".//outcome_icon"
import { overflow_icon } from ".//overflow_icon"
import { package_icon } from ".//package_icon"
import { package_org_beta_icon } from ".//package_org_beta_icon"
import { package_org_icon } from ".//package_org_icon"
import { page_icon } from ".//page_icon"
import { palette_icon } from ".//palette_icon"
import { password_icon } from ".//password_icon"
import { paste_icon } from ".//paste_icon"
import { pause_icon } from ".//pause_icon"
import { people_icon } from ".//people_icon"
import { phone_landscape_icon } from ".//phone_landscape_icon"
import { phone_portrait_icon } from ".//phone_portrait_icon"
import { photo_icon } from ".//photo_icon"
import { picklist_choice_icon } from ".//picklist_choice_icon"
import { picklist_icon } from ".//picklist_icon"
import { picklist_type_icon } from ".//picklist_type_icon"
import { pin_icon } from ".//pin_icon"
import { pinned_icon } from ".//pinned_icon"
import { play_icon } from ".//play_icon"
import { podcast_webinar_icon } from ".//podcast_webinar_icon"
import { pop_in_icon } from ".//pop_in_icon"
import { power_icon } from ".//power_icon"
import { preview_icon } from ".//preview_icon"
import { print_icon } from ".//print_icon"
import { priority_icon } from ".//priority_icon"
import { privately_shared_icon } from ".//privately_shared_icon"
import { process_icon } from ".//process_icon"
import { prompt_edit_icon } from ".//prompt_edit_icon"
import { prompt_icon } from ".//prompt_icon"
import { push_icon } from ".//push_icon"
import { puzzle_icon } from ".//puzzle_icon"
import { question_icon } from ".//question_icon"
import { question_mark_icon } from ".//question_mark_icon"
import { questions_and_answers_icon } from ".//questions_and_answers_icon"
import { quick_text_icon } from ".//quick_text_icon"
import { quotation_marks_icon } from ".//quotation_marks_icon"
import { quote_icon } from ".//quote_icon"
import { radio_button_icon } from ".//radio_button_icon"
import { rating_icon } from ".//rating_icon"
import { reassign_icon } from ".//reassign_icon"
import { record_create_icon } from ".//record_create_icon"
import { record_delete_icon } from ".//record_delete_icon"
import { record_icon } from ".//record_icon"
import { record_lookup_icon } from ".//record_lookup_icon"
import { record_update_icon } from ".//record_update_icon"
import { recurring_exception_icon } from ".//recurring_exception_icon"
import { redo_icon } from ".//redo_icon"
import { refresh_icon } from ".//refresh_icon"
import { relate_icon } from ".//relate_icon"
import { reminder_icon } from ".//reminder_icon"
import { remove_formatting_icon } from ".//remove_formatting_icon"
import { remove_link_icon } from ".//remove_link_icon"
import { replace_icon } from ".//replace_icon"
import { reply_all_icon } from ".//reply_all_icon"
import { reply_icon } from ".//reply_icon"
import { report_issue_icon } from ".//report_issue_icon"
import { reset_password_icon } from ".//reset_password_icon"
import { resource_absence_icon } from ".//resource_absence_icon"
import { resource_capacity_icon } from ".//resource_capacity_icon"
import { resource_territory_icon } from ".//resource_territory_icon"
import { retweet_icon } from ".//retweet_icon"
import { ribbon_icon } from ".//ribbon_icon"
import { richtextbulletedlist_icon } from ".//richtextbulletedlist_icon"
import { richtextindent_icon } from ".//richtextindent_icon"
import { richtextnumberedlist_icon } from ".//richtextnumberedlist_icon"
import { richtextoutdent_icon } from ".//richtextoutdent_icon"
import { right_align_text_icon } from ".//right_align_text_icon"
import { right_icon } from ".//right_icon"
import { rotate_icon } from ".//rotate_icon"
import { routing_offline_icon } from ".//routing_offline_icon"
import { rows_icon } from ".//rows_icon"
import { rules_icon } from ".//rules_icon"
import { salesforce1_icon } from ".//salesforce1_icon"
import { save_icon } from ".//save_icon"
import { screen_icon } from ".//screen_icon"
import { search_icon } from ".//search_icon"
import { send_icon } from ".//send_icon"
import { sentiment_negative_icon } from ".//sentiment_negative_icon"
import { sentiment_neutral_icon } from ".//sentiment_neutral_icon"
import { settings_icon } from ".//settings_icon"
import { setup_assistant_guide_icon } from ".//setup_assistant_guide_icon"
import { setup_icon } from ".//setup_icon"
import { setup_modal_icon } from ".//setup_modal_icon"
import { share_file_icon } from ".//share_file_icon"
import { share_icon } from ".//share_icon"
import { share_mobile_icon } from ".//share_mobile_icon"
import { share_post_icon } from ".//share_post_icon"
import { shield_icon } from ".//shield_icon"
import { shopping_bag_icon } from ".//shopping_bag_icon"
import { shortcuts_icon } from ".//shortcuts_icon"
import { side_list_icon } from ".//side_list_icon"
import { signpost_icon } from ".//signpost_icon"
import { skip_icon } from ".//skip_icon"
import { smiley_and_people_icon } from ".//smiley_and_people_icon"
import { sms_icon } from ".//sms_icon"
import { snippet_icon } from ".//snippet_icon"
import { sobject_collection_icon } from ".//sobject_collection_icon"
import { sobject_icon } from ".//sobject_icon"
import { socialshare_icon } from ".//socialshare_icon"
import { sort_icon } from ".//sort_icon"
import { spinner_icon } from ".//spinner_icon"
import { stage_collection_icon } from ".//stage_collection_icon"
import { stage_icon } from ".//stage_icon"
import { standard_objects_icon } from ".//standard_objects_icon"
import { steps_icon } from ".//steps_icon"
import { stop_icon } from ".//stop_icon"
import { strategy_icon } from ".//strategy_icon"
import { strikethrough_icon } from ".//strikethrough_icon"
import { success_icon } from ".//success_icon"
import { summary_icon } from ".//summary_icon"
import { summarydetail_icon } from ".//summarydetail_icon"
import { survey_icon } from ".//survey_icon"
import { switch_icon } from ".//switch_icon"
import { symbols_icon } from ".//symbols_icon"
import { sync_icon } from ".//sync_icon"
import { system_and_global_variable_icon } from ".//system_and_global_variable_icon"
import { table_icon } from ".//table_icon"
import { tablet_landscape_icon } from ".//tablet_landscape_icon"
import { tablet_portrait_icon } from ".//tablet_portrait_icon"
import { tabset_icon } from ".//tabset_icon"
import { task_icon } from ".//task_icon"
import { text_background_color_icon } from ".//text_background_color_icon"
import { text_color_icon } from ".//text_color_icon"
import { text_icon } from ".//text_icon"
import { text_template_icon } from ".//text_template_icon"
import { textarea_icon } from ".//textarea_icon"
import { textbox_icon } from ".//textbox_icon"
import { threedots_icon } from ".//threedots_icon"
import { threedots_vertical_icon } from ".//threedots_vertical_icon"
import { thunder_icon } from ".//thunder_icon"
import { tile_card_list_icon } from ".//tile_card_list_icon"
import { toggle_panel_bottom_icon } from ".//toggle_panel_bottom_icon"
import { toggle_panel_left_icon } from ".//toggle_panel_left_icon"
import { toggle_panel_right_icon } from ".//toggle_panel_right_icon"
import { toggle_panel_top_icon } from ".//toggle_panel_top_icon"
import { topic_icon } from ".//topic_icon"
import { topic2_icon } from ".//topic2_icon"
import { touch_action_icon } from ".//touch_action_icon"
import { tracker_icon } from ".//tracker_icon"
import { trail_icon } from ".//trail_icon"
import { trailhead_icon } from ".//trailhead_icon"
import { travel_and_places_icon } from ".//travel_and_places_icon"
import { trending_icon } from ".//trending_icon"
import { turn_off_notifications_icon } from ".//turn_off_notifications_icon"
import { type_icon } from ".//type_icon"
import { type_tool_icon } from ".//type_tool_icon"
import { undelete_icon } from ".//undelete_icon"
import { undeprecate_icon } from ".//undeprecate_icon"
import { underline_icon } from ".//underline_icon"
import { undo_icon } from ".//undo_icon"
import { unlinked_icon } from ".//unlinked_icon"
import { unlock_icon } from ".//unlock_icon"
import { unmuted_icon } from ".//unmuted_icon"
import { up_icon } from ".//up_icon"
import { upload_icon } from ".//upload_icon"
import { user_icon } from ".//user_icon"
import { user_role_icon } from ".//user_role_icon"
import { variable_icon } from ".//variable_icon"
import { video_icon } from ".//video_icon"
import { voicemail_drop_icon } from ".//voicemail_drop_icon"
import { volume_high_icon } from ".//volume_high_icon"
import { volume_low_icon } from ".//volume_low_icon"
import { volume_off_icon } from ".//volume_off_icon"
import { waits_icon } from ".//waits_icon"
import { warning_icon } from ".//warning_icon"
import { weeklyview_icon } from ".//weeklyview_icon"
import { wifi_icon } from ".//wifi_icon"
import { work_order_type_icon } from ".//work_order_type_icon"
import { world_icon } from ".//world_icon"
import { yubi_key_icon } from ".//yubi_key_icon"
import { zoomin_icon } from ".//zoomin_icon"
import { zoomout_icon } from ".//zoomout_icon"

const icons = {
    activity: activity_icon,
    ad_set: ad_set_icon,
    add: add_icon,
    adduser: adduser_icon,
    advanced_function: advanced_function_icon,
    advertising: advertising_icon,
    agent_session: agent_session_icon,
    alert: alert_icon,
    all: all_icon,
    anchor: anchor_icon,
    animal_and_nature: animal_and_nature_icon,
    announcement: announcement_icon,
    answer: answer_icon,
    answered_twice: answered_twice_icon,
    apex: apex_icon,
    apex_plugin: apex_plugin_icon,
    approval: approval_icon,
    apps: apps_icon,
    archive: archive_icon,
    arrowdown: arrowdown_icon,
    arrowup: arrowup_icon,
    assignment: assignment_icon,
    attach: attach_icon,
    automate: automate_icon,
    away: away_icon,
    back: back_icon,
    ban: ban_icon,
    block_visitor: block_visitor_icon,
    bold: bold_icon,
    bookmark: bookmark_icon,
    breadcrumbs: breadcrumbs_icon,
    broadcast: broadcast_icon,
    brush: brush_icon,
    bucket: bucket_icon,
    builder: builder_icon,
    call: call_icon,
    campaign: campaign_icon,
    cancel_file_request: cancel_file_request_icon,
    cancel_transfer: cancel_transfer_icon,
    capslock: capslock_icon,
    cart: cart_icon,
    case: case_icon,
    cases: cases_icon,
    center_align_text: center_align_text_icon,
    change_owner: change_owner_icon,
    change_record_type: change_record_type_icon,
    chart: chart_icon,
    chat: chat_icon,
    check: check_icon,
    checkin: checkin_icon,
    chevrondown: chevrondown_icon,
    chevronleft: chevronleft_icon,
    chevronright: chevronright_icon,
    chevronup: chevronup_icon,
    choice: choice_icon,
    classic_interface: classic_interface_icon,
    clear: clear_icon,
    clock: clock_icon,
    close: close_icon,
    collapse_all: collapse_all_icon,
    collection_variable: collection_variable_icon,
    color_swatch: color_swatch_icon,
    comments: comments_icon,
    company: company_icon,
    connected_apps: connected_apps_icon,
    constant: constant_icon,
    contact_request: contact_request_icon,
    contract_alt: contract_alt_icon,
    contract: contract_icon,
    copy: copy_icon,
    copy_to_clipboard: copy_to_clipboard_icon,
    crossfilter: crossfilter_icon,
    currency: currency_icon,
    currency_input: currency_input_icon,
    custom_apps: custom_apps_icon,
    cut: cut_icon,
    dash: dash_icon,
    database: database_icon,
    datadotcom: datadotcom_icon,
    date_input: date_input_icon,
    date_time: date_time_icon,
    dayview: dayview_icon,
    delete: delete_icon,
    deprecate: deprecate_icon,
    description: description_icon,
    desktop_console: desktop_console_icon,
    desktop: desktop_icon,
    dialing: dialing_icon,
    dislike: dislike_icon,
    display_rich_text: display_rich_text_icon,
    display_text: display_text_icon,
    dock_panel: dock_panel_icon,
    down: down_icon,
    download: download_icon,
    drag_and_drop: drag_and_drop_icon,
    drag: drag_icon,
    dynamic_record_choice: dynamic_record_choice_icon,
    edit_form: edit_form_icon,
    edit: edit_icon,
    einstein: einstein_icon,
    email: email_icon,
    email_open: email_open_icon,
    emoji: emoji_icon,
    end_call: end_call_icon,
    end_chat: end_chat_icon,
    end_messaging_session: end_messaging_session_icon,
    erect_window: erect_window_icon,
    error: error_icon,
    event: event_icon,
    events: events_icon,
    expand_all: expand_all_icon,
    expand_alt: expand_alt_icon,
    expand: expand_icon,
    fallback: fallback_icon,
    favorite: favorite_icon,
    feed: feed_icon,
    file: file_icon,
    filter: filter_icon,
    filterList: filterList_icon,
    flow: flow_icon,
    food_and_drink: food_and_drink_icon,
    formula: formula_icon,
    forward: forward_icon,
    forward_up: forward_up_icon,
    frozen: frozen_icon,
    fulfillment_order: fulfillment_order_icon,
    full_width_view: full_width_view_icon,
    global_constant: global_constant_icon,
    graph: graph_icon,
    groups: groups_icon,
    help_center: help_center_icon,
    help: help_icon,
    hide: hide_icon,
    hide_mobile: hide_mobile_icon,
    hierarchy: hierarchy_icon,
    home: home_icon,
    identity: identity_icon,
    image: image_icon,
    in_app_assistant: in_app_assistant_icon,
    inbox: inbox_icon,
    incoming_call: incoming_call_icon,
    info_alt: info_alt_icon,
    info: info_icon,
    insert_tag_field: insert_tag_field_icon,
    insert_template: insert_template_icon,
    inspector_panel: inspector_panel_icon,
    internal_share: internal_share_icon,
    italic: italic_icon,
    jump_to_bottom: jump_to_bottom_icon,
    jump_to_top: jump_to_top_icon,
    justify_text: justify_text_icon,
    kanban: kanban_icon,
    keyboard_dismiss: keyboard_dismiss_icon,
    knowledge_base: knowledge_base_icon,
    layers: layers_icon,
    layout: layout_icon,
    leave_conference: leave_conference_icon,
    left_align_text: left_align_text_icon,
    left: left_icon,
    level_down: level_down_icon,
    level_up: level_up_icon,
    light_bulb: light_bulb_icon,
    lightning_inspector: lightning_inspector_icon,
    like: like_icon,
    link: link_icon,
    linked: linked_icon,
    list: list_icon,
    listen: listen_icon,
    live_message: live_message_icon,
    location: location_icon,
    lock: lock_icon,
    locker_service_api_viewer: locker_service_api_viewer_icon,
    locker_service_console: locker_service_console_icon,
    log_a_call: log_a_call_icon,
    logout: logout_icon,
    loop: loop_icon,
    lower_flag: lower_flag_icon,
    macros: macros_icon,
    magicwand: magicwand_icon,
    mark_all_as_read: mark_all_as_read_icon,
    matrix: matrix_icon,
    merge_field: merge_field_icon,
    merge: merge_icon,
    metrics: metrics_icon,
    minimize_window: minimize_window_icon,
    missed_call: missed_call_icon,
    money: money_icon,
    moneybag: moneybag_icon,
    monthlyview: monthlyview_icon,
    move: move_icon,
    multi_picklist: multi_picklist_icon,
    multi_select_checkbox: multi_select_checkbox_icon,
    muted: muted_icon,
    new_direct_message: new_direct_message_icon,
    new: new_icon,
    new_window: new_window_icon,
    news: news_icon,
    note: note_icon,
    notebook: notebook_icon,
    notification: notification_icon,
    number_input: number_input_icon,
    office365: office365_icon,
    offline_cached: offline_cached_icon,
    offline: offline_icon,
    omni_channel: omni_channel_icon,
    open_folder: open_folder_icon,
    open: open_icon,
    opened_folder: opened_folder_icon,
    outbound_call: outbound_call_icon,
    outcome: outcome_icon,
    overflow: overflow_icon,
    package: package_icon,
    package_org_beta: package_org_beta_icon,
    package_org: package_org_icon,
    page: page_icon,
    palette: palette_icon,
    password: password_icon,
    paste: paste_icon,
    pause: pause_icon,
    people: people_icon,
    phone_landscape: phone_landscape_icon,
    phone_portrait: phone_portrait_icon,
    photo: photo_icon,
    picklist_choice: picklist_choice_icon,
    picklist: picklist_icon,
    picklist_type: picklist_type_icon,
    pin: pin_icon,
    pinned: pinned_icon,
    play: play_icon,
    podcast_webinar: podcast_webinar_icon,
    pop_in: pop_in_icon,
    power: power_icon,
    preview: preview_icon,
    print: print_icon,
    priority: priority_icon,
    privately_shared: privately_shared_icon,
    process: process_icon,
    prompt_edit: prompt_edit_icon,
    prompt: prompt_icon,
    push: push_icon,
    puzzle: puzzle_icon,
    question: question_icon,
    question_mark: question_mark_icon,
    questions_and_answers: questions_and_answers_icon,
    quick_text: quick_text_icon,
    quotation_marks: quotation_marks_icon,
    quote: quote_icon,
    radio_button: radio_button_icon,
    rating: rating_icon,
    reassign: reassign_icon,
    record_create: record_create_icon,
    record_delete: record_delete_icon,
    record: record_icon,
    record_lookup: record_lookup_icon,
    record_update: record_update_icon,
    recurring_exception: recurring_exception_icon,
    redo: redo_icon,
    refresh: refresh_icon,
    relate: relate_icon,
    reminder: reminder_icon,
    remove_formatting: remove_formatting_icon,
    remove_link: remove_link_icon,
    replace: replace_icon,
    reply_all: reply_all_icon,
    reply: reply_icon,
    report_issue: report_issue_icon,
    reset_password: reset_password_icon,
    resource_absence: resource_absence_icon,
    resource_capacity: resource_capacity_icon,
    resource_territory: resource_territory_icon,
    retweet: retweet_icon,
    ribbon: ribbon_icon,
    richtextbulletedlist: richtextbulletedlist_icon,
    richtextindent: richtextindent_icon,
    richtextnumberedlist: richtextnumberedlist_icon,
    richtextoutdent: richtextoutdent_icon,
    right_align_text: right_align_text_icon,
    right: right_icon,
    rotate: rotate_icon,
    routing_offline: routing_offline_icon,
    rows: rows_icon,
    rules: rules_icon,
    salesforce1: salesforce1_icon,
    save: save_icon,
    screen: screen_icon,
    search: search_icon,
    send: send_icon,
    sentiment_negative: sentiment_negative_icon,
    sentiment_neutral: sentiment_neutral_icon,
    settings: settings_icon,
    setup_assistant_guide: setup_assistant_guide_icon,
    setup: setup_icon,
    setup_modal: setup_modal_icon,
    share_file: share_file_icon,
    share: share_icon,
    share_mobile: share_mobile_icon,
    share_post: share_post_icon,
    shield: shield_icon,
    shopping_bag: shopping_bag_icon,
    shortcuts: shortcuts_icon,
    side_list: side_list_icon,
    signpost: signpost_icon,
    skip: skip_icon,
    smiley_and_people: smiley_and_people_icon,
    sms: sms_icon,
    snippet: snippet_icon,
    sobject_collection: sobject_collection_icon,
    sobject: sobject_icon,
    socialshare: socialshare_icon,
    sort: sort_icon,
    spinner: spinner_icon,
    stage_collection: stage_collection_icon,
    stage: stage_icon,
    standard_objects: standard_objects_icon,
    steps: steps_icon,
    stop: stop_icon,
    strategy: strategy_icon,
    strikethrough: strikethrough_icon,
    success: success_icon,
    summary: summary_icon,
    summarydetail: summarydetail_icon,
    survey: survey_icon,
    switch: switch_icon,
    symbols: symbols_icon,
    sync: sync_icon,
    system_and_global_variable: system_and_global_variable_icon,
    table: table_icon,
    tablet_landscape: tablet_landscape_icon,
    tablet_portrait: tablet_portrait_icon,
    tabset: tabset_icon,
    task: task_icon,
    text_background_color: text_background_color_icon,
    text_color: text_color_icon,
    text: text_icon,
    text_template: text_template_icon,
    textarea: textarea_icon,
    textbox: textbox_icon,
    threedots: threedots_icon,
    threedots_vertical: threedots_vertical_icon,
    thunder: thunder_icon,
    tile_card_list: tile_card_list_icon,
    toggle_panel_bottom: toggle_panel_bottom_icon,
    toggle_panel_left: toggle_panel_left_icon,
    toggle_panel_right: toggle_panel_right_icon,
    toggle_panel_top: toggle_panel_top_icon,
    topic: topic_icon,
    topic2: topic2_icon,
    touch_action: touch_action_icon,
    tracker: tracker_icon,
    trail: trail_icon,
    trailhead: trailhead_icon,
    travel_and_places: travel_and_places_icon,
    trending: trending_icon,
    turn_off_notifications: turn_off_notifications_icon,
    type: type_icon,
    type_tool: type_tool_icon,
    undelete: undelete_icon,
    undeprecate: undeprecate_icon,
    underline: underline_icon,
    undo: undo_icon,
    unlinked: unlinked_icon,
    unlock: unlock_icon,
    unmuted: unmuted_icon,
    up: up_icon,
    upload: upload_icon,
    user: user_icon,
    user_role: user_role_icon,
    variable: variable_icon,
    video: video_icon,
    voicemail_drop: voicemail_drop_icon,
    volume_high: volume_high_icon,
    volume_low: volume_low_icon,
    volume_off: volume_off_icon,
    waits: waits_icon,
    warning: warning_icon,
    weeklyview: weeklyview_icon,
    wifi: wifi_icon,
    work_order_type: work_order_type_icon,
    world: world_icon,
    yubi_key: yubi_key_icon,
    zoomin: zoomin_icon,
    zoomout: zoomout_icon,
}

const sizes = {
    "xx-small": "slds-icon_xx-small",
    "x-small": "slds-icon_x-small",
    small: "slds-icon_small",
    medium: "slds-icon_medium",
    large: "slds-icon_large",
}

export function UtilityIcon(props) {
    const NamedIcon = icons[props.name]
    return (
        <figure>
            <span className={"slds-icon_container"}>
                <NamedIcon
                    {...props}
                    className={"slds-icon " + sizes[props.size]}
                />
            </span>
        </figure>
    )
}

UtilityIcon.defaultProps = {
    width: 24,
    height: 25,
}

addPropertyControls(UtilityIcon, {
    fill: {
        type: ControlType.Color,
        title: "Fill",
        defaultValue: "#706e6b",
    },
    name: {
        type: ControlType.Enum,
        options: [
            "activity",
            "ad_set",
            "add",
            "adduser",
            "advanced_function",
            "advertising",
            "agent_session",
            "alert",
            "all",
            "anchor",
            "animal_and_nature",
            "announcement",
            "answer",
            "answered_twice",
            "apex",
            "apex_plugin",
            "approval",
            "apps",
            "archive",
            "arrowdown",
            "arrowup",
            "assignment",
            "attach",
            "automate",
            "away",
            "back",
            "ban",
            "block_visitor",
            "bold",
            "bookmark",
            "breadcrumbs",
            "broadcast",
            "brush",
            "bucket",
            "builder",
            "call",
            "campaign",
            "cancel_file_request",
            "cancel_transfer",
            "capslock",
            "cart",
            "case",
            "cases",
            "center_align_text",
            "change_owner",
            "change_record_type",
            "chart",
            "chat",
            "check",
            "checkin",
            "chevrondown",
            "chevronleft",
            "chevronright",
            "chevronup",
            "choice",
            "classic_interface",
            "clear",
            "clock",
            "close",
            "collapse_all",
            "collection_variable",
            "color_swatch",
            "comments",
            "company",
            "connected_apps",
            "constant",
            "contact_request",
            "contract_alt",
            "contract",
            "copy",
            "copy_to_clipboard",
            "crossfilter",
            "currency",
            "currency_input",
            "custom_apps",
            "cut",
            "dash",
            "database",
            "datadotcom",
            "date_input",
            "date_time",
            "dayview",
            "delete",
            "deprecate",
            "description",
            "desktop_console",
            "desktop",
            "dialing",
            "dislike",
            "display_rich_text",
            "display_text",
            "dock_panel",
            "down",
            "download",
            "drag_and_drop",
            "drag",
            "dynamic_record_choice",
            "edit_form",
            "edit",
            "einstein",
            "email",
            "email_open",
            "emoji",
            "end_call",
            "end_chat",
            "end_messaging_session",
            "erect_window",
            "error",
            "event",
            "events",
            "expand_all",
            "expand_alt",
            "expand",
            "fallback",
            "favorite",
            "feed",
            "file",
            "filter",
            "filterList",
            "flow",
            "food_and_drink",
            "formula",
            "forward",
            "forward_up",
            "frozen",
            "fulfillment_order",
            "full_width_view",
            "global_constant",
            "graph",
            "groups",
            "help_center",
            "help",
            "hide",
            "hide_mobile",
            "hierarchy",
            "home",
            "identity",
            "image",
            "in_app_assistant",
            "inbox",
            "incoming_call",
            "info_alt",
            "info",
            "insert_tag_field",
            "insert_template",
            "inspector_panel",
            "internal_share",
            "italic",
            "jump_to_bottom",
            "jump_to_top",
            "justify_text",
            "kanban",
            "keyboard_dismiss",
            "knowledge_base",
            "layers",
            "layout",
            "leave_conference",
            "left_align_text",
            "left",
            "level_down",
            "level_up",
            "light_bulb",
            "lightning_inspector",
            "like",
            "link",
            "linked",
            "list",
            "listen",
            "live_message",
            "location",
            "lock",
            "locker_service_api_viewer",
            "locker_service_console",
            "log_a_call",
            "logout",
            "loop",
            "lower_flag",
            "macros",
            "magicwand",
            "mark_all_as_read",
            "matrix",
            "merge_field",
            "merge",
            "metrics",
            "minimize_window",
            "missed_call",
            "money",
            "moneybag",
            "monthlyview",
            "move",
            "multi_picklist",
            "multi_select_checkbox",
            "muted",
            "new_direct_message",
            "new",
            "new_window",
            "news",
            "note",
            "notebook",
            "notification",
            "number_input",
            "office365",
            "offline_cached",
            "offline",
            "omni_channel",
            "open_folder",
            "open",
            "opened_folder",
            "outbound_call",
            "outcome",
            "overflow",
            "package",
            "package_org_beta",
            "package_org",
            "page",
            "palette",
            "password",
            "paste",
            "pause",
            "people",
            "phone_landscape",
            "phone_portrait",
            "photo",
            "picklist_choice",
            "picklist",
            "picklist_type",
            "pin",
            "pinned",
            "play",
            "podcast_webinar",
            "pop_in",
            "power",
            "preview",
            "print",
            "priority",
            "privately_shared",
            "process",
            "prompt_edit",
            "prompt",
            "push",
            "puzzle",
            "question",
            "question_mark",
            "questions_and_answers",
            "quick_text",
            "quotation_marks",
            "quote",
            "radio_button",
            "rating",
            "reassign",
            "record_create",
            "record_delete",
            "record",
            "record_lookup",
            "record_update",
            "recurring_exception",
            "redo",
            "refresh",
            "relate",
            "reminder",
            "remove_formatting",
            "remove_link",
            "replace",
            "reply_all",
            "reply",
            "report_issue",
            "reset_password",
            "resource_absence",
            "resource_capacity",
            "resource_territory",
            "retweet",
            "ribbon",
            "richtextbulletedlist",
            "richtextindent",
            "richtextnumberedlist",
            "richtextoutdent",
            "right_align_text",
            "right",
            "rotate",
            "routing_offline",
            "rows",
            "rules",
            "salesforce1",
            "save",
            "screen",
            "search",
            "send",
            "sentiment_negative",
            "sentiment_neutral",
            "settings",
            "setup_assistant_guide",
            "setup",
            "setup_modal",
            "share_file",
            "share",
            "share_mobile",
            "share_post",
            "shield",
            "shopping_bag",
            "shortcuts",
            "side_list",
            "signpost",
            "skip",
            "smiley_and_people",
            "sms",
            "snippet",
            "sobject_collection",
            "sobject",
            "socialshare",
            "sort",
            "spinner",
            "stage_collection",
            "stage",
            "standard_objects",
            "steps",
            "stop",
            "strategy",
            "strikethrough",
            "success",
            "summary",
            "summarydetail",
            "survey",
            "switch",
            "symbols",
            "sync",
            "system_and_global_variable",
            "table",
            "tablet_landscape",
            "tablet_portrait",
            "tabset",
            "task",
            "text_background_color",
            "text_color",
            "text",
            "text_template",
            "textarea",
            "textbox",
            "threedots",
            "threedots_vertical",
            "thunder",
            "tile_card_list",
            "toggle_panel_bottom",
            "toggle_panel_left",
            "toggle_panel_right",
            "toggle_panel_top",
            "topic",
            "topic2",
            "touch_action",
            "tracker",
            "trail",
            "trailhead",
            "travel_and_places",
            "trending",
            "turn_off_notifications",
            "type",
            "type_tool",
            "undelete",
            "undeprecate",
            "underline",
            "undo",
            "unlinked",
            "unlock",
            "unmuted",
            "up",
            "upload",
            "user",
            "user_role",
            "variable",
            "video",
            "voicemail_drop",
            "volume_high",
            "volume_low",
            "volume_off",
            "waits",
            "warning",
            "weeklyview",
            "wifi",
            "work_order_type",
            "world",
            "yubi_key",
            "zoomin",
            "zoomout",
        ],
    },
    size: {
        type: ControlType.Enum,
        options: ["xx-small", "x-small", "small", "medium", "large"],
        defaultValue: "small",
    },
})
