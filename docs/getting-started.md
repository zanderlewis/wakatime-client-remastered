[ DOCUMENTATION WRITERS NEEDED ]

# Getting Started
This is the guide to get started with `Wakatime Client Remastered.`

## Installation
To install the client, you can use the following command:
```bash
npm install wakatime-client-remastered
```
or you can add it to your `package.json` file:
```json
{
  "dependencies": {
    "wakatime-client-remastered": "^1.1.0"
  }
}
```

## Usage
### Classes
- WakaTimeClient
  - ARGS: `apiKey, baseURL = 'https://wakatime.com/api/v1'`
  - METHODS: [#methods](#methods)

### Methods
- [User](#user)
- [Teams](#teams)
- [Organizations](#organizations)

#### User
- [getUser()](user/get-user.md)
- [getMe()](user/get-me.md)
- [getUserAgents()](user/get-user-agents.md)
- [getMyUserAgents()](user/get-myuser-agents.md)
- [getUserSummary()](user/get-user-summary.md)
- [getMySummary()](user/get-myuser-summary.md)
- [getUserStats()](user/get-user-stats.md)
- [getMyStats()](user/get-my-stats.md)
- [getProjects()](user/get-projects.md)
- [getMyProjects()](user/get-my-projects.md)
- [getLeaders()](user/get-leaders.md)
- [getHeartbeats()](user/get-heartbeats.md)
- [getMyHeartbeats()](user/get-my-heartbeats.md)
- [getGoals()](user/get-goals.md)
- [getMyGoals()](user/get-my-goals.md)
- [getDurations()](user/get-durations.md)
- [getMyDurations()](user/get-my-durations.md)
- [getCommits()](user/get-commits.md)
- [getMyCommits()](user/get-my-commits.md)
- [getMetadata()](user/get-metadata.md)

#### Teams
- [getTeams()](teams/get-teams.md)
- [getMyTeams()](teams/get-my-teams.md)
- [getTeamMembers()](teams/get-team-members.md)
- [getMyTeamMembers()](teams/get-my-team-members.md)
- [getTeamMemberSummary()](teams/get-team-member-summary.md)
- [getMyTeamMemberSummary()](teams/get-my-team-member-summary.md)

#### Organizations
- [getOrganizations()](orgs/get-organizations.md)
- [getMyOrganizations()](orgs/get-my-organizations.md)
- [getOrganizationDashboards()](orgs/get-organization-dashboards.md)
- [getMyOrganizationDashboards()](orgs/get-my-organization-dashboards.md)
- [getOrganizationDashboardMembers()](orgs/get-organization-dashboard-members.md)
- [getMyOrganizationDashboardMembers()](orgs/get-my-organization-dashboard-members.md)
- [getOrganizationDashboardMemberSummaries()](orgs/get-organization-dashboard-member-summaries.md)
- [getMyOrganizationDashboardMemberSummaries()](orgs/get-my-organization-dashboard-member-summaries.md)
- [getOrganizationDashboardMemberDurations()](orgs/get-organization-dashboard-member-durations.md)
- [getMyOrganizationDashboardMemberDurations()](orgs/get-my-organization-dashboard-member-durations.md)
