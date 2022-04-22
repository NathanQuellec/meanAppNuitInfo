describe('Test API GET', () => {
    it('API AVC', () => {
        cy.request('GET', 'http://localhost:3000/diagnostics/avc').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.headers).to.include({
                'content-type': 'application/json; charset=utf-8',
            })
            expect(response.body).to.have.property('prediction')
            expect(response.body).to.have.property('score')
        })
    })
    it('API History AVC', () => {
        cy.request('GET', 'http://localhost:3000/diagnostics/avc/history').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.headers).to.include({
                'content-type': 'application/json; charset=utf-8',
            })
        })
    })
    it('API Diabete', () => {
        cy.request('GET', 'http://localhost:3000/diagnostics/diabete').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.headers).to.include({
                'content-type': 'application/json; charset=utf-8',
            })
        })
    })
    it('API Heart Attack', () => {
        cy.request('GET', 'http://localhost:3000/diagnostics/heart').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.headers).to.include({
                'content-type': 'application/json; charset=utf-8',
            })
        })
    })
})