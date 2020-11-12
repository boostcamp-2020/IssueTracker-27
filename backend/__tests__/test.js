const request = require('supertest');
const app = require('../app');

describe('ISSUE API TEST', () => {
  let server;

  beforeEach(() => {
    server = request(app);
  });

  describe('GET /api/issue/1 - 특정 이슈 조회', () => {
    it('1번 이슈를 볼러온다.', async (done) => {
      const res = await server.get('/api/issue/1').set({
        'Content-Type': 'application/json',
      });
      const { body } = res;
      expect(res.statusCode).toBe(200);
      expect(body).toHaveProperty('issue');
      expect(body.issue.id).toBe(1);
      done();
    });
  });

  describe('POST /api/issue - 이슈 생성 ', () => {
    it('title이 없을때 이슈가 생성되면 안된다.', async (done) => {
      const res = await server
        .post('/api/issue/')
        .send({
          joinUserId: 1,
          description: 'test',
          milestoneId: 1,
          issueTrackerId: 1,
        })
        .set({
          'Content-Type': 'application/json',
        });
      const { body } = res;
      expect(res.statusCode).toBe(400);
      expect(body.message).toBe('error');
      done();
    });
  });
});
