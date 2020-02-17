import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { account_icon } from ".//account_icon"
import { action_list_component_icon } from ".//action_list_component_icon"
import { actions_and_buttons_icon } from ".//actions_and_buttons_icon"
import { address_icon } from ".//address_icon"
import { agent_session_icon } from ".//agent_session_icon"
import { all_icon } from ".//all_icon"
import { announcement_icon } from ".//announcement_icon"
import { answer_best_icon } from ".//answer_best_icon"
import { answer_private_icon } from ".//answer_private_icon"
import { answer_public_icon } from ".//answer_public_icon"
import { apex_icon } from ".//apex_icon"
import { apex_plugin_icon } from ".//apex_plugin_icon"
import { approval_icon } from ".//approval_icon"
import { apps_admin_icon } from ".//apps_admin_icon"
import { apps_icon } from ".//apps_icon"
import { article_icon } from ".//article_icon"
import { asset_relationship_icon } from ".//asset_relationship_icon"
import { assigned_resource_icon } from ".//assigned_resource_icon"
import { assignment_icon } from ".//assignment_icon"
import { avatar_icon } from ".//avatar_icon"
import { avatar_loading_icon } from ".//avatar_loading_icon"
import { bot_icon } from ".//bot_icon"
import { bot_training_icon } from ".//bot_training_icon"
import { branch_merge_icon } from ".//branch_merge_icon"
import { brand_icon } from ".//brand_icon"
import { business_hours_icon } from ".//business_hours_icon"
import { calibration_icon } from ".//calibration_icon"
import { call_history_icon } from ".//call_history_icon"
import { call_icon } from ".//call_icon"
import { campaign_icon } from ".//campaign_icon"
import { campaign_members_icon } from ".//campaign_members_icon"
import { canvas_icon } from ".//canvas_icon"
import { carousel_icon } from ".//carousel_icon"
import { case_change_status_icon } from ".//case_change_status_icon"
import { case_comment_icon } from ".//case_comment_icon"
import { case_email_icon } from ".//case_email_icon"
import { case_icon } from ".//case_icon"
import { case_log_a_call_icon } from ".//case_log_a_call_icon"
import { case_milestone_icon } from ".//case_milestone_icon"
import { case_transcript_icon } from ".//case_transcript_icon"
import { catalog_icon } from ".//catalog_icon"
import { category_icon } from ".//category_icon"
import { channel_program_history_icon } from ".//channel_program_history_icon"
import { channel_program_levels_icon } from ".//channel_program_levels_icon"
import { channel_program_members_icon } from ".//channel_program_members_icon"
import { channel_programs_icon } from ".//channel_programs_icon"
import { choice_icon } from ".//choice_icon"
import { client_icon } from ".//client_icon"
import { cms_icon } from ".//cms_icon"
import { coaching_icon } from ".//coaching_icon"
import { code_playground_icon } from ".//code_playground_icon"
import { collection_variable_icon } from ".//collection_variable_icon"
import { connected_apps_icon } from ".//connected_apps_icon"
import { constant_icon } from ".//constant_icon"
import { contact_icon } from ".//contact_icon"
import { contact_list_icon } from ".//contact_list_icon"
import { contact_request_icon } from ".//contact_request_icon"
import { contract_icon } from ".//contract_icon"
import { contract_line_item_icon } from ".//contract_line_item_icon"
import { currency_icon } from ".//currency_icon"
import { currency_input_icon } from ".//currency_input_icon"
import { custom_icon } from ".//custom_icon"
import { custom_notification_icon } from ".//custom_notification_icon"
import { customer_portal_users_icon } from ".//customer_portal_users_icon"
import { customers_icon } from ".//customers_icon"
import { dashboard_icon } from ".//dashboard_icon"
import { data_integration_hub_icon } from ".//data_integration_hub_icon"
import { datadotcom_icon } from ".//datadotcom_icon"
import { date_input_icon } from ".//date_input_icon"
import { date_time_icon } from ".//date_time_icon"
import { decision_icon } from ".//decision_icon"
import { default_icon } from ".//default_icon"
import { display_rich_text_icon } from ".//display_rich_text_icon"
import { display_text_icon } from ".//display_text_icon"
import { document_icon } from ".//document_icon"
import { drafts_icon } from ".//drafts_icon"
import { dynamic_record_choice_icon } from ".//dynamic_record_choice_icon"
import { email_chatter_icon } from ".//email_chatter_icon"
import { email_icon } from ".//email_icon"
import { empty_icon } from ".//empty_icon"
import { endorsement_icon } from ".//endorsement_icon"
import { entitlement_icon } from ".//entitlement_icon"
import { entitlement_process_icon } from ".//entitlement_process_icon"
import { entitlement_template_icon } from ".//entitlement_template_icon"
import { entity_icon } from ".//entity_icon"
import { entity_milestone_icon } from ".//entity_milestone_icon"
import { environment_hub_icon } from ".//environment_hub_icon"
import { event_icon } from ".//event_icon"
import { feed_icon } from ".//feed_icon"
import { feedback_icon } from ".//feedback_icon"
import { file_icon } from ".//file_icon"
import { filter_icon } from ".//filter_icon"
import { first_non_empty_icon } from ".//first_non_empty_icon"
import { flow_icon } from ".//flow_icon"
import { folder_icon } from ".//folder_icon"
import { forecasts_icon } from ".//forecasts_icon"
import { formula_icon } from ".//formula_icon"
import { generic_loading_icon } from ".//generic_loading_icon"
import { global_constant_icon } from ".//global_constant_icon"
import { goals_icon } from ".//goals_icon"
import { group_loading_icon } from ".//group_loading_icon"
import { groups_icon } from ".//groups_icon"
import { hierarchy_icon } from ".//hierarchy_icon"
import { home_icon } from ".//home_icon"
import { household_icon } from ".//household_icon"
import { individual_icon } from ".//individual_icon"
import { insights_icon } from ".//insights_icon"
import { instore_locations_icon } from ".//instore_locations_icon"
import { investment_account_icon } from ".//investment_account_icon"
import { invocable_action_icon } from ".//invocable_action_icon"
import { iot_context_icon } from ".//iot_context_icon"
import { iot_orchestrations_icon } from ".//iot_orchestrations_icon"
import { javascript_button_icon } from ".//javascript_button_icon"
import { kanban_icon } from ".//kanban_icon"
import { knowledge_icon } from ".//knowledge_icon"
import { lead_icon } from ".//lead_icon"
import { lead_insights_icon } from ".//lead_insights_icon"
import { lead_list_icon } from ".//lead_list_icon"
import { letterhead_icon } from ".//letterhead_icon"
import { lightning_component_icon } from ".//lightning_component_icon"
import { lightning_usage_icon } from ".//lightning_usage_icon"
import { link_icon } from ".//link_icon"
import { list_email_icon } from ".//list_email_icon"
import { live_chat_icon } from ".//live_chat_icon"
import { live_chat_visitor_icon } from ".//live_chat_visitor_icon"
import { location_icon } from ".//location_icon"
import { log_a_call_icon } from ".//log_a_call_icon"
import { logging_icon } from ".//logging_icon"
import { loop_icon } from ".//loop_icon"
import { macros_icon } from ".//macros_icon"
import { maintenance_asset_icon } from ".//maintenance_asset_icon"
import { maintenance_plan_icon } from ".//maintenance_plan_icon"
import { marketing_actions_icon } from ".//marketing_actions_icon"
import { merge_icon } from ".//merge_icon"
import { messaging_conversation_icon } from ".//messaging_conversation_icon"
import { messaging_session_icon } from ".//messaging_session_icon"
import { messaging_user_icon } from ".//messaging_user_icon"
import { metrics_icon } from ".//metrics_icon"
import { multi_picklist_icon } from ".//multi_picklist_icon"
import { multi_select_checkbox_icon } from ".//multi_select_checkbox_icon"
import { news_icon } from ".//news_icon"
import { note_icon } from ".//note_icon"
import { number_input_icon } from ".//number_input_icon"
import { omni_supervisor_icon } from ".//omni_supervisor_icon"
import { operating_hours_icon } from ".//operating_hours_icon"
import { opportunity_icon } from ".//opportunity_icon"
import { opportunity_splits_icon } from ".//opportunity_splits_icon"
import { orders_icon } from ".//orders_icon"
import { outcome_icon } from ".//outcome_icon"
import { output_icon } from ".//output_icon"
import { partner_fund_allocation_icon } from ".//partner_fund_allocation_icon"
import { partner_fund_claim_icon } from ".//partner_fund_claim_icon"
import { partner_fund_request_icon } from ".//partner_fund_request_icon"
import { partner_marketing_budget_icon } from ".//partner_marketing_budget_icon"
import { partners_icon } from ".//partners_icon"
import { password_icon } from ".//password_icon"
import { past_chat_icon } from ".//past_chat_icon"
import { people_icon } from ".//people_icon"
import { performance_icon } from ".//performance_icon"
import { person_account_icon } from ".//person_account_icon"
import { photo_icon } from ".//photo_icon"
import { picklist_choice_icon } from ".//picklist_choice_icon"
import { picklist_type_icon } from ".//picklist_type_icon"
import { planogram_icon } from ".//planogram_icon"
import { poll_icon } from ".//poll_icon"
import { portal_icon } from ".//portal_icon"
import { portal_roles_and_subordinates_icon } from ".//portal_roles_and_subordinates_icon"
import { portal_roles_icon } from ".//portal_roles_icon"
import { post_icon } from ".//post_icon"
import { pricebook_icon } from ".//pricebook_icon"
import { process_icon } from ".//process_icon"
import { product_consumed_icon } from ".//product_consumed_icon"
import { product_icon } from ".//product_icon"
import { product_item_icon } from ".//product_item_icon"
import { product_item_transaction_icon } from ".//product_item_transaction_icon"
import { product_request_icon } from ".//product_request_icon"
import { product_request_line_item_icon } from ".//product_request_line_item_icon"
import { product_required_icon } from ".//product_required_icon"
import { product_transfer_icon } from ".//product_transfer_icon"
import { proposition_icon } from ".//proposition_icon"
import { question_best_icon } from ".//question_best_icon"
import { question_feed_icon } from ".//question_feed_icon"
import { queue_icon } from ".//queue_icon"
import { quick_text_icon } from ".//quick_text_icon"
import { quip_icon } from ".//quip_icon"
import { quip_sheet_icon } from ".//quip_sheet_icon"
import { quotes_icon } from ".//quotes_icon"
import { radio_button_icon } from ".//radio_button_icon"
import { read_receipts_icon } from ".//read_receipts_icon"
import { recent_icon } from ".//recent_icon"
import { record_create_icon } from ".//record_create_icon"
import { record_delete_icon } from ".//record_delete_icon"
import { record_icon } from ".//record_icon"
import { record_lookup_icon } from ".//record_lookup_icon"
import { record_update_icon } from ".//record_update_icon"
import { related_list_icon } from ".//related_list_icon"
import { relationship_icon } from ".//relationship_icon"
import { report_icon } from ".//report_icon"
import { resource_absence_icon } from ".//resource_absence_icon"
import { resource_capacity_icon } from ".//resource_capacity_icon"
import { resource_preference_icon } from ".//resource_preference_icon"
import { resource_skill_icon } from ".//resource_skill_icon"
import { return_order_icon } from ".//return_order_icon"
import { return_order_line_item_icon } from ".//return_order_line_item_icon"
import { reward_icon } from ".//reward_icon"
import { rtc_presence_icon } from ".//rtc_presence_icon"
import { sales_cadence_icon } from ".//sales_cadence_icon"
import { sales_cadence_target_icon } from ".//sales_cadence_target_icon"
import { sales_path_icon } from ".//sales_path_icon"
import { scan_card_icon } from ".//scan_card_icon"
import { screen_icon } from ".//screen_icon"
import { search_icon } from ".//search_icon"
import { service_appointment_capacity_usage_icon } from ".//service_appointment_capacity_usage_icon"
import { service_appointment_icon } from ".//service_appointment_icon"
import { service_contract_icon } from ".//service_contract_icon"
import { service_crew_icon } from ".//service_crew_icon"
import { service_crew_member_icon } from ".//service_crew_member_icon"
import { service_report_icon } from ".//service_report_icon"
import { service_resource_icon } from ".//service_resource_icon"
import { service_territory_icon } from ".//service_territory_icon"
import { service_territory_location_icon } from ".//service_territory_location_icon"
import { service_territory_member_icon } from ".//service_territory_member_icon"
import { shift_icon } from ".//shift_icon"
import { shift_type_icon } from ".//shift_type_icon"
import { shipment_icon } from ".//shipment_icon"
import { skill_entity_icon } from ".//skill_entity_icon"
import { skill_icon } from ".//skill_icon"
import { skill_requirement_icon } from ".//skill_requirement_icon"
import { sms_icon } from ".//sms_icon"
import { snippet_icon } from ".//snippet_icon"
import { sobject_collection_icon } from ".//sobject_collection_icon"
import { sobject_icon } from ".//sobject_icon"
import { social_icon } from ".//social_icon"
import { solution_icon } from ".//solution_icon"
import { sort_icon } from ".//sort_icon"
import { sossession_icon } from ".//sossession_icon"
import { stage_collection_icon } from ".//stage_collection_icon"
import { stage_icon } from ".//stage_icon"
import { steps_icon } from ".//steps_icon"
import { store_group_icon } from ".//store_group_icon"
import { strategy_icon } from ".//strategy_icon"
import { survey_icon } from ".//survey_icon"
import { system_and_global_variable_icon } from ".//system_and_global_variable_icon"
import { task_icon } from ".//task_icon"
import { task2_icon } from ".//task2_icon"
import { team_member_icon } from ".//team_member_icon"
import { template_icon } from ".//template_icon"
import { text_icon } from ".//text_icon"
import { text_template_icon } from ".//text_template_icon"
import { textarea_icon } from ".//textarea_icon"
import { textbox_icon } from ".//textbox_icon"
import { thanks_icon } from ".//thanks_icon"
import { thanks_loading_icon } from ".//thanks_loading_icon"
import { timesheet_entry_icon } from ".//timesheet_entry_icon"
import { timesheet_icon } from ".//timesheet_icon"
import { timeslot_icon } from ".//timeslot_icon"
import { today_icon } from ".//today_icon"
import { topic_icon } from ".//topic_icon"
import { topic2_icon } from ".//topic2_icon"
import { trailhead_icon } from ".//trailhead_icon"
import { unmatched_icon } from ".//unmatched_icon"
import { user_icon } from ".//user_icon"
import { user_role_icon } from ".//user_role_icon"
import { variable_icon } from ".//variable_icon"
import { visit_templates_icon } from ".//visit_templates_icon"
import { visits_icon } from ".//visits_icon"
import { visualforce_page_icon } from ".//visualforce_page_icon"
import { waits_icon } from ".//waits_icon"
import { work_capacity_limit_icon } from ".//work_capacity_limit_icon"
import { work_capacity_usage_icon } from ".//work_capacity_usage_icon"
import { work_order_icon } from ".//work_order_icon"
import { work_order_item_icon } from ".//work_order_item_icon"
import { work_queue_icon } from ".//work_queue_icon"
import { work_type_group_icon } from ".//work_type_group_icon"
import { work_type_icon } from ".//work_type_icon"

const icons = {
    account: account_icon,
    action_list_component: action_list_component_icon,
    actions_and_buttons: actions_and_buttons_icon,
    address: address_icon,
    agent_session: agent_session_icon,
    all: all_icon,
    announcement: announcement_icon,
    answer_best: answer_best_icon,
    answer_private: answer_private_icon,
    answer_public: answer_public_icon,
    apex: apex_icon,
    apex_plugin: apex_plugin_icon,
    approval: approval_icon,
    apps_admin: apps_admin_icon,
    apps: apps_icon,
    article: article_icon,
    asset_relationship: asset_relationship_icon,
    assigned_resource: assigned_resource_icon,
    assignment: assignment_icon,
    avatar: avatar_icon,
    avatar_loading: avatar_loading_icon,
    bot: bot_icon,
    bot_training: bot_training_icon,
    branch_merge: branch_merge_icon,
    brand: brand_icon,
    business_hours: business_hours_icon,
    calibration: calibration_icon,
    call_history: call_history_icon,
    call: call_icon,
    campaign: campaign_icon,
    campaign_members: campaign_members_icon,
    canvas: canvas_icon,
    carousel: carousel_icon,
    case_change_status: case_change_status_icon,
    case_comment: case_comment_icon,
    case_email: case_email_icon,
    case: case_icon,
    case_log_a_call: case_log_a_call_icon,
    case_milestone: case_milestone_icon,
    case_transcript: case_transcript_icon,
    catalog: catalog_icon,
    category: category_icon,
    channel_program_history: channel_program_history_icon,
    channel_program_levels: channel_program_levels_icon,
    channel_program_members: channel_program_members_icon,
    channel_programs: channel_programs_icon,
    choice: choice_icon,
    client: client_icon,
    cms: cms_icon,
    coaching: coaching_icon,
    code_playground: code_playground_icon,
    collection_variable: collection_variable_icon,
    connected_apps: connected_apps_icon,
    constant: constant_icon,
    contact: contact_icon,
    contact_list: contact_list_icon,
    contact_request: contact_request_icon,
    contract: contract_icon,
    contract_line_item: contract_line_item_icon,
    currency: currency_icon,
    currency_input: currency_input_icon,
    custom: custom_icon,
    custom_notification: custom_notification_icon,
    customer_portal_users: customer_portal_users_icon,
    customers: customers_icon,
    dashboard: dashboard_icon,
    data_integration_hub: data_integration_hub_icon,
    datadotcom: datadotcom_icon,
    date_input: date_input_icon,
    date_time: date_time_icon,
    decision: decision_icon,
    default: default_icon,
    display_rich_text: display_rich_text_icon,
    display_text: display_text_icon,
    document: document_icon,
    drafts: drafts_icon,
    dynamic_record_choice: dynamic_record_choice_icon,
    email_chatter: email_chatter_icon,
    email: email_icon,
    empty: empty_icon,
    endorsement: endorsement_icon,
    entitlement: entitlement_icon,
    entitlement_process: entitlement_process_icon,
    entitlement_template: entitlement_template_icon,
    entity: entity_icon,
    entity_milestone: entity_milestone_icon,
    environment_hub: environment_hub_icon,
    event: event_icon,
    feed: feed_icon,
    feedback: feedback_icon,
    file: file_icon,
    filter: filter_icon,
    first_non_empty: first_non_empty_icon,
    flow: flow_icon,
    folder: folder_icon,
    forecasts: forecasts_icon,
    formula: formula_icon,
    generic_loading: generic_loading_icon,
    global_constant: global_constant_icon,
    goals: goals_icon,
    group_loading: group_loading_icon,
    groups: groups_icon,
    hierarchy: hierarchy_icon,
    home: home_icon,
    household: household_icon,
    individual: individual_icon,
    insights: insights_icon,
    instore_locations: instore_locations_icon,
    investment_account: investment_account_icon,
    invocable_action: invocable_action_icon,
    iot_context: iot_context_icon,
    iot_orchestrations: iot_orchestrations_icon,
    javascript_button: javascript_button_icon,
    kanban: kanban_icon,
    knowledge: knowledge_icon,
    lead: lead_icon,
    lead_insights: lead_insights_icon,
    lead_list: lead_list_icon,
    letterhead: letterhead_icon,
    lightning_component: lightning_component_icon,
    lightning_usage: lightning_usage_icon,
    link: link_icon,
    list_email: list_email_icon,
    live_chat: live_chat_icon,
    live_chat_visitor: live_chat_visitor_icon,
    location: location_icon,
    log_a_call: log_a_call_icon,
    logging: logging_icon,
    loop: loop_icon,
    macros: macros_icon,
    maintenance_asset: maintenance_asset_icon,
    maintenance_plan: maintenance_plan_icon,
    marketing_actions: marketing_actions_icon,
    merge: merge_icon,
    messaging_conversation: messaging_conversation_icon,
    messaging_session: messaging_session_icon,
    messaging_user: messaging_user_icon,
    metrics: metrics_icon,
    multi_picklist: multi_picklist_icon,
    multi_select_checkbox: multi_select_checkbox_icon,
    news: news_icon,
    note: note_icon,
    number_input: number_input_icon,
    omni_supervisor: omni_supervisor_icon,
    operating_hours: operating_hours_icon,
    opportunity: opportunity_icon,
    opportunity_splits: opportunity_splits_icon,
    orders: orders_icon,
    outcome: outcome_icon,
    output: output_icon,
    partner_fund_allocation: partner_fund_allocation_icon,
    partner_fund_claim: partner_fund_claim_icon,
    partner_fund_request: partner_fund_request_icon,
    partner_marketing_budget: partner_marketing_budget_icon,
    partners: partners_icon,
    password: password_icon,
    past_chat: past_chat_icon,
    people: people_icon,
    performance: performance_icon,
    person_account: person_account_icon,
    photo: photo_icon,
    picklist_choice: picklist_choice_icon,
    picklist_type: picklist_type_icon,
    planogram: planogram_icon,
    poll: poll_icon,
    portal: portal_icon,
    portal_roles_and_subordinates: portal_roles_and_subordinates_icon,
    portal_roles: portal_roles_icon,
    post: post_icon,
    pricebook: pricebook_icon,
    process: process_icon,
    product_consumed: product_consumed_icon,
    product: product_icon,
    product_item: product_item_icon,
    product_item_transaction: product_item_transaction_icon,
    product_request: product_request_icon,
    product_request_line_item: product_request_line_item_icon,
    product_required: product_required_icon,
    product_transfer: product_transfer_icon,
    proposition: proposition_icon,
    question_best: question_best_icon,
    question_feed: question_feed_icon,
    queue: queue_icon,
    quick_text: quick_text_icon,
    quip: quip_icon,
    quip_sheet: quip_sheet_icon,
    quotes: quotes_icon,
    radio_button: radio_button_icon,
    read_receipts: read_receipts_icon,
    recent: recent_icon,
    record_create: record_create_icon,
    record_delete: record_delete_icon,
    record: record_icon,
    record_lookup: record_lookup_icon,
    record_update: record_update_icon,
    related_list: related_list_icon,
    relationship: relationship_icon,
    report: report_icon,
    resource_absence: resource_absence_icon,
    resource_capacity: resource_capacity_icon,
    resource_preference: resource_preference_icon,
    resource_skill: resource_skill_icon,
    return_order: return_order_icon,
    return_order_line_item: return_order_line_item_icon,
    reward: reward_icon,
    rtc_presence: rtc_presence_icon,
    sales_cadence: sales_cadence_icon,
    sales_cadence_target: sales_cadence_target_icon,
    sales_path: sales_path_icon,
    scan_card: scan_card_icon,
    screen: screen_icon,
    search: search_icon,
    service_appointment_capacity_usage: service_appointment_capacity_usage_icon,
    service_appointment: service_appointment_icon,
    service_contract: service_contract_icon,
    service_crew: service_crew_icon,
    service_crew_member: service_crew_member_icon,
    service_report: service_report_icon,
    service_resource: service_resource_icon,
    service_territory: service_territory_icon,
    service_territory_location: service_territory_location_icon,
    service_territory_member: service_territory_member_icon,
    shift: shift_icon,
    shift_type: shift_type_icon,
    shipment: shipment_icon,
    skill_entity: skill_entity_icon,
    skill: skill_icon,
    skill_requirement: skill_requirement_icon,
    sms: sms_icon,
    snippet: snippet_icon,
    sobject_collection: sobject_collection_icon,
    sobject: sobject_icon,
    social: social_icon,
    solution: solution_icon,
    sort: sort_icon,
    sossession: sossession_icon,
    stage_collection: stage_collection_icon,
    stage: stage_icon,
    steps: steps_icon,
    store_group: store_group_icon,
    strategy: strategy_icon,
    survey: survey_icon,
    system_and_global_variable: system_and_global_variable_icon,
    task: task_icon,
    task2: task2_icon,
    team_member: team_member_icon,
    template: template_icon,
    text: text_icon,
    text_template: text_template_icon,
    textarea: textarea_icon,
    textbox: textbox_icon,
    thanks: thanks_icon,
    thanks_loading: thanks_loading_icon,
    timesheet_entry: timesheet_entry_icon,
    timesheet: timesheet_icon,
    timeslot: timeslot_icon,
    today: today_icon,
    topic: topic_icon,
    topic2: topic2_icon,
    trailhead: trailhead_icon,
    unmatched: unmatched_icon,
    user: user_icon,
    user_role: user_role_icon,
    variable: variable_icon,
    visit_templates: visit_templates_icon,
    visits: visits_icon,
    visualforce_page: visualforce_page_icon,
    waits: waits_icon,
    work_capacity_limit: work_capacity_limit_icon,
    work_capacity_usage: work_capacity_usage_icon,
    work_order: work_order_icon,
    work_order_item: work_order_item_icon,
    work_queue: work_queue_icon,
    work_type_group: work_type_group_icon,
    work_type: work_type_icon,
}

export function StandardIcon(props) {
    const NamedIcon = icons[props.name]
    return <NamedIcon {...props} />
}

addPropertyControls(StandardIcon, {
    fill: {
        type: ControlType.Color,
        title: "Fill",
        defaultValue: "#ffffff",
    },
    name: {
        type: ControlType.Enum,
        options: [
            "account",
            "action_list_component",
            "actions_and_buttons",
            "address",
            "agent_session",
            "all",
            "announcement",
            "answer_best",
            "answer_private",
            "answer_public",
            "apex",
            "apex_plugin",
            "approval",
            "apps_admin",
            "apps",
            "article",
            "asset_relationship",
            "assigned_resource",
            "assignment",
            "avatar",
            "avatar_loading",
            "bot",
            "bot_training",
            "branch_merge",
            "brand",
            "business_hours",
            "calibration",
            "call_history",
            "call",
            "campaign",
            "campaign_members",
            "canvas",
            "carousel",
            "case_change_status",
            "case_comment",
            "case_email",
            "case",
            "case_log_a_call",
            "case_milestone",
            "case_transcript",
            "catalog",
            "category",
            "channel_program_history",
            "channel_program_levels",
            "channel_program_members",
            "channel_programs",
            "choice",
            "client",
            "cms",
            "coaching",
            "code_playground",
            "collection_variable",
            "connected_apps",
            "constant",
            "contact",
            "contact_list",
            "contact_request",
            "contract",
            "contract_line_item",
            "currency",
            "currency_input",
            "custom",
            "custom_notification",
            "customer_portal_users",
            "customers",
            "dashboard",
            "data_integration_hub",
            "datadotcom",
            "date_input",
            "date_time",
            "decision",
            "default",
            "display_rich_text",
            "display_text",
            "document",
            "drafts",
            "dynamic_record_choice",
            "email_chatter",
            "email",
            "empty",
            "endorsement",
            "entitlement",
            "entitlement_process",
            "entitlement_template",
            "entity",
            "entity_milestone",
            "environment_hub",
            "event",
            "feed",
            "feedback",
            "file",
            "filter",
            "first_non_empty",
            "flow",
            "folder",
            "forecasts",
            "formula",
            "generic_loading",
            "global_constant",
            "goals",
            "group_loading",
            "groups",
            "hierarchy",
            "home",
            "household",
            "individual",
            "insights",
            "instore_locations",
            "investment_account",
            "invocable_action",
            "iot_context",
            "iot_orchestrations",
            "javascript_button",
            "kanban",
            "knowledge",
            "lead",
            "lead_insights",
            "lead_list",
            "letterhead",
            "lightning_component",
            "lightning_usage",
            "link",
            "list_email",
            "live_chat",
            "live_chat_visitor",
            "location",
            "log_a_call",
            "logging",
            "loop",
            "macros",
            "maintenance_asset",
            "maintenance_plan",
            "marketing_actions",
            "merge",
            "messaging_conversation",
            "messaging_session",
            "messaging_user",
            "metrics",
            "multi_picklist",
            "multi_select_checkbox",
            "news",
            "note",
            "number_input",
            "omni_supervisor",
            "operating_hours",
            "opportunity",
            "opportunity_splits",
            "orders",
            "outcome",
            "output",
            "partner_fund_allocation",
            "partner_fund_claim",
            "partner_fund_request",
            "partner_marketing_budget",
            "partners",
            "password",
            "past_chat",
            "people",
            "performance",
            "person_account",
            "photo",
            "picklist_choice",
            "picklist_type",
            "planogram",
            "poll",
            "portal",
            "portal_roles_and_subordinates",
            "portal_roles",
            "post",
            "pricebook",
            "process",
            "product_consumed",
            "product",
            "product_item",
            "product_item_transaction",
            "product_request",
            "product_request_line_item",
            "product_required",
            "product_transfer",
            "proposition",
            "question_best",
            "question_feed",
            "queue",
            "quick_text",
            "quip",
            "quip_sheet",
            "quotes",
            "radio_button",
            "read_receipts",
            "recent",
            "record_create",
            "record_delete",
            "record",
            "record_lookup",
            "record_update",
            "related_list",
            "relationship",
            "report",
            "resource_absence",
            "resource_capacity",
            "resource_preference",
            "resource_skill",
            "return_order",
            "return_order_line_item",
            "reward",
            "rtc_presence",
            "sales_cadence",
            "sales_cadence_target",
            "sales_path",
            "scan_card",
            "screen",
            "search",
            "service_appointment_capacity_usage",
            "service_appointment",
            "service_contract",
            "service_crew",
            "service_crew_member",
            "service_report",
            "service_resource",
            "service_territory",
            "service_territory_location",
            "service_territory_member",
            "shift",
            "shift_type",
            "shipment",
            "skill_entity",
            "skill",
            "skill_requirement",
            "sms",
            "snippet",
            "sobject_collection",
            "sobject",
            "social",
            "solution",
            "sort",
            "sossession",
            "stage_collection",
            "stage",
            "steps",
            "store_group",
            "strategy",
            "survey",
            "system_and_global_variable",
            "task",
            "task2",
            "team_member",
            "template",
            "text",
            "text_template",
            "textarea",
            "textbox",
            "thanks",
            "thanks_loading",
            "timesheet_entry",
            "timesheet",
            "timeslot",
            "today",
            "topic",
            "topic2",
            "trailhead",
            "unmatched",
            "user",
            "user_role",
            "variable",
            "visit_templates",
            "visits",
            "visualforce_page",
            "waits",
            "work_capacity_limit",
            "work_capacity_usage",
            "work_order",
            "work_order_item",
            "work_queue",
            "work_type_group",
            "work_type_icon",
        ],
    },
})
