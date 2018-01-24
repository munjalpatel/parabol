import graphQLSubscriptionType from 'server/graphql/graphQLSubscriptionType';
import AcceptTeamInviteEmailPayload from 'server/graphql/types/AcceptTeamInviteEmailPayload';
import AcceptTeamInviteNotificationPayload from 'server/graphql/types/AcceptTeamInviteNotificationPayload';
import InviteTeamMembersPayload from 'server/graphql/types/InviteTeamMembersPayload';
import MeetingCheckInPayload from 'server/graphql/types/MeetingCheckInPayload';
import PromoteToTeamLeadPayload from 'server/graphql/types/PromoteToTeamLeadPayload';
import RemoveTeamMemberPayload from 'server/graphql/types/RemoveTeamMemberPayload';
import RemoveOrgUserPayload from 'server/graphql/types/RemoveOrgUserPayload';

const types = [
  AcceptTeamInviteNotificationPayload,
  AcceptTeamInviteEmailPayload,
  RemoveTeamMemberPayload,
  InviteTeamMembersPayload,
  MeetingCheckInPayload,
  PromoteToTeamLeadPayload,
  RemoveOrgUserPayload
];

export default graphQLSubscriptionType('TeanMemberSubscriptionPayload', types);
