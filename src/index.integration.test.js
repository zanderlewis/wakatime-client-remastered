import dotenv from 'dotenv';
import { WakaTimeClient, RANGE } from '.';

dotenv.config();

jest.setTimeout(60000);

describe('WakaTimeClient Integration Test', () => {
  let client;
  const userId = process.env.USER_ID;
  const startDate = new Date(new Date().setDate(new Date().getDate() - 6));
  const endDate = new Date();
  const formattedStartDate = startDate.toISOString().split('T')[0];
  const formattedEndDate = endDate.toISOString().split('T')[0];
  const date = startDate.toISOString().split('T')[0];
  const dateRange = {
    startDate: formattedStartDate,
    endDate: formattedEndDate,
  };
  const range = RANGE.LAST_7_DAYS;
  const projectName = process.env.PROJECT_NAME || 'default-project';
  const branchNames = process.env.BRANCH_NAMES ? process.env.BRANCH_NAMES.split(',') : ['master'];
  const organizationId = process.env.ORGANIZATION_ID;
  const dashboardId = process.env.DASHBOARD_ID;

  beforeEach(() => {
    client = new WakaTimeClient(process.env.ACCESS_TOKEN);
  });

  describe('getUser', () => {
    it('gets user details', async () => {
      const response = await client.getUser(userId);
      const { data } = response;
      expect(data).toBeDefined();
      expect(data).toMatchObject({
        id: userId,
        created_at: expect.any(String),
        email: expect.any(String),
        full_name: expect.any(String),
      });
    });
  });

  describe('getMe', () => {
    it('gets my user details', async () => {
      const response = await client.getMe();
      const { data } = response;
      expect(data).toBeDefined();
      expect(data).toMatchObject({
        id: userId,
        created_at: expect.any(String),
        email: expect.any(String),
        full_name: expect.any(String),
      });
    });
  });

  describe('getTeams', () => {
    it('gets teams', async () => {
      // Test this when I have a test team
      /*
      const response = await client.getTeams(userId);
      expect(response).toBeDefined();
      */
    });
  });

  describe('getMyTeams', () => {
    it('gets my teams', async () => {
      // Test this when I have a test team
      /*
      const response = await client.getMyTeams();
      expect(response).toBeDefined();
      */
    });
  });

  describe('getUserAgents', () => {
    it('gets user agents', async () => {
      const response = await client.getUserAgents(userId);
      expect(response).toBeDefined();
    });
  });

  describe('getMyUserAgents', () => {
    it('gets my user agents', async () => {
      const response = await client.getMyUserAgents();
      expect(response).toBeDefined();
    });
  });

  describe('getTeamMembers', () => {
    it('gets team members', async () => {
      // Test this when I have a test teams
      // const response = await client.getTeamMembers({ userId, teamId });
      // const { data } = response;
      // const { data: teamMemberData } = data;
      // expect(teamMemberData).toBeDefined();
    });
  });

  describe('getUserSummary', () => {
    it('gets user summary with default parameters', async () => {
      const response = await client.getUserSummary({ userId, dateRange });
      expect(response).toBeDefined();
    });

    it('gets user summary with parameters', async () => {
      const response = await client.getUserSummary({
        userId,
        dateRange,
        projectName,
        branchNames,
      });
      expect(response).toBeDefined();
    });
  });

  describe('getMySummary', () => {
    it('gets my summary with default parameters', async () => {
      const response = await client.getMySummary({ dateRange });
      expect(response).toBeDefined();
    });

    it('gets my summary with parameters', async () => {
      const response = await client.getMySummary({
        dateRange,
        projectName,
        branchNames,
      });
      expect(response).toBeDefined();
    });
  });

  describe('getUserStats', () => {
    it('gets user stats with default parameters', async () => {
      const response = await client.getUserStats({ userId, range });
      expect(response).toBeDefined();
    });
  });

  describe('getMyStats', () => {
    it('gets my stats with default parameters', async () => {
      const response = await client.getMyStats({ range });
      expect(response).toBeDefined();
    });
  });

  describe('getProjects', () => {
    it('gets projects', async () => {
      const response = await client.getProjects(userId);
      expect(response).toBeDefined();
    });
  });

  describe('getMyProjects', () => {
    it('gets my projects', async () => {
      const response = await client.getMyProjects();
      expect(response).toBeDefined();
    });
  });

  describe('getLeaders', () => {
    it('gets leaders with default parameters', async () => {
      const response = await client.getLeaders();
      expect(response).toBeDefined();
    });

    it('gets JavaScript leaders on page 2', async () => {
      const response = await client.getLeaders({ language: 'JavaScript', pageNumber: 2 });
      expect(response).toBeDefined();
    });
  });

  describe('getHeartbeats', () => {
    it('gets heartbeats for date', async () => {
      const response = await client.getHeartbeats({ userId, date });
      expect(response).toBeDefined();
    });
  });

  describe('getMyHeartbeats', () => {
    it('gets my heartbeats for date', async () => {
      const response = await client.getMyHeartbeats(date);
      expect(response).toBeDefined();
    });
  });

  describe('getGoals', () => {
    it('gets goals', async () => {
      const response = await client.getGoals(userId);
      expect(response).toBeDefined();
    });
  });

  describe('getMyGoals', () => {
    it('gets my goals', async () => {
      const response = await client.getMyGoals();
      expect(response).toBeDefined();
    });
  });

  describe('getDurations', () => {
    it('gets durations for date', async () => {
      const response = await client.getDurations({ userId, date });
      expect(response).toBeDefined();
    });

    it('gets durations for date, project, and branches', async () => {
      const response = await client.getDurations({
        userId,
        date,
        projectName,
        branchNames,
      });
      expect(response).toBeDefined();
    });
  });

  describe('getMyDurations', () => {
    it('gets my durations for date', async () => {
      const response = await client.getMyDurations({ date });
      expect(response).toBeDefined();
    });

    it('gets my durations for date, project, and branches', async () => {
      const response = await client.getMyDurations({ date, projectName, branchNames });
      expect(response).toBeDefined();
    });
  });

  describe('getMetadata', () => {
    it('gets metadata about WakaTime', async () => {
      const response = await client.getMetadata();
      expect(response).toBeDefined();
    });

    it('WakaTime metadata response has data property', async () => {
      const response = await client.getMetadata();
      expect(response.data).toBeDefined();
    });
  });

  describe('getOrganizations', () => {
    it('gets organizations for specified user', async () => {
      // Test this when I have a test organization
      /*
      const response = await client.getOrganizations(userId);
      expect(response).toBeDefined();
      */
    });
  });

  describe('getMyOrganizations', () => {
    it('gets organizations for current user', async () => {
      // Test this when I have a test organization
      /*
      const response = await client.getMyOrganizations();
      expect(response).toBeDefined();
      */
    });
  });

  describe('getOrganizationDashboards', () => {
    it('gets organization dashboards for specified user and organization', async () => {
      // Test this when I have a test organization
      /*
      const response = await client.getOrganizationDashboards({ userId, organizationId });
      expect(response).toBeDefined();
      */
    });
  });

  describe('getMyOrganizationDashboards', () => {
    it('gets organization dashboards for current user and organization', async () => {
      // Test this when I have a test organization
      /*
      const response = await client.getMyOrganizationDashboards(organizationId);
      expect(response).toBeDefined();
      */
    });
  });

  describe('getOrganizationDashboardMembers', () => {
    it('gets organization dashboard members for specified user, organization, and dashboard', async () => {
      // Test this when I have a test organization
      /*
      const response = await client.getOrganizationDashboardMembers({
        userId,
        organizationId,
        dashboardId,
      });
      expect(response).toBeDefined();
      */
    });
  });

  describe('getMyOrganizationDashboardMembers', () => {
    it('gets organization dashboard members for specified user, organization, and dashboard', async () => {
      // Test this when I have a test organization
      /*
      const response = await client.getMyOrganizationDashboardMembers({
        organizationId,
        dashboardId,
      });
      expect(response).toBeDefined();
      */
    });
  });
});
