describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('TCL_001', () => {
        cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear().type('Admin')
        cy.xpath('//input[@placeholder="Username"]').should('have.value', 'Admin')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear().type('admin123')
        cy.xpath('//input[@placeholder="Password"]').should('have.value', 'admin123')

        cy.get('button[type="submit"]').should('be.visible').click()
        cy.url().should('include', '/dashboard')
    })
    it('TCL_002', () => {
        cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear().type('Admin')
        cy.xpath('//input[@placeholder="Username"]').should('have.value', 'Admin')
        
        cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear().type('admin')
        cy.xpath('//input[@placeholder="Password"]').should('have.value', 'admin')

        cy.get('button[type="submit"]').should('be.visible').click()
        cy.xpath('//p[contains(@class, "oxd-alert-content-text")]').should('contain', 'Invalid credentials')
    })
    it('TCL_003', () => {
        cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear().type('Adminnn')
        cy.xpath('//input[@placeholder="Username"]').should('have.value', 'Adminnn')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear().type('admin123')
        cy.xpath('//input[@placeholder="Password"]').should('have.value', 'admin123')

        cy.get('button[type="submit"]').should('be.visible').click()
        cy.xpath('//p[contains(@class, "oxd-alert-content-text")]').should('contain', 'Invalid credentials')
    })
    it('TCL_004', () => {
        cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear()
        cy.xpath('//input[@placeholder="Username"]').should('have.value', '')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear()
        cy.xpath('//input[@placeholder="Password"]').should('have.value', '')

        cy.get('button[type="submit"]').should('be.visible').click()
        cy.xpath('//span[contains(@class, "oxd-input-field-error-message")]').should('contain', 'Required')
    })
    it('TCL_005', () => {
        cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear().type('coba')
        cy.xpath('//input[@placeholder="Username"]').should('have.value', 'coba')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear().type('coba123')
        cy.xpath('//input[@placeholder="Password"]').should('have.value', 'coba123')

        cy.get('button[type="submit"]').should('be.visible').click()
        cy.xpath('//p[contains(@class, "oxd-alert-content-text")]').should('contain', 'Invalid credentials')
    })
    it('TCL_006', () => {
        cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear()
        cy.xpath('//input[@placeholder="Username"]').should('have.value', '')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear().type('admin123')
        cy.xpath('//input[@placeholder="Password"]').should('have.value', 'admin123')

        cy.get('button[type="submit"]').should('be.visible').click()
        cy.xpath('//span[contains(@class, "oxd-input-field-error-message")]').should('contain', 'Required')
    })
    it('TCL_007', () => {
        cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear().type('Admin')
        cy.xpath('//input[@placeholder="Username"]').should('have.value', 'Admin')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear()
        cy.xpath('//input[@placeholder="Password"]').should('have.value', '')

        cy.get('button[type="submit"]').should('be.visible').click()
        cy.xpath('//span[contains(@class, "oxd-input-field-error-message")]').should('contain', 'Required')
    })
    it('TCL_008', () => {
        cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear().type('ADMIN')
        cy.xpath('//input[@placeholder="Username"]').should('have.value', 'ADMIN')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear().type('admin123')
        cy.xpath('//input[@placeholder="Password"]').should('have.value', 'admin123')

        cy.get('button[type="submit"]').should('be.visible').click()
        cy.xpath('//p[contains(@class, "oxd-alert-content-text")]').should('contain', 'Invalid credentials')
    })
    it('TCL_009', () => {
        cy.xpath('//input[@placeholder="Username"]').should('be.visible').clear().type('Admin')
        cy.xpath('//input[@placeholder="Username"]').should('have.value', 'Admin')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible').clear().type('ADMIN123')
        cy.xpath('//input[@placeholder="Password"]').should('have.value', 'ADMIN123')

        cy.get('button[type="submit"]').should('be.visible').click()
        cy.xpath('//p[contains(@class, "oxd-alert-content-text")]').should('contain', 'Invalid credentials')
    })
})