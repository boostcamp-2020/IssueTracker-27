const request = require('supertest');
const app = require('../app');

describe('GET /api/issue/:issueId - 특정 이슈 조회', () => {
  it('GET: 1번 이슈를 들고온다.', async (done) => {
    const res = await request(app).get('/api/issue/1').set({
      'Content-Type': 'application/json',
    });

    const { body } = res;
    expect(res.statusCode).toBe(200);
    expect(body).toHaveProperty('issue');
    expect(body.issue.id).toBe(1);
    done();
  });
});
