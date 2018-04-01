export function createTestCustomers() {
    return [
        {
            id: 1,
            name: 'Janez Novak',
            address: {
                street: 'Unknown street 666',
                city: 'Lost City',
                region: 'severozahod',
                state: 'Slovenija'
            }
        },
        {
            id: 2,
            name: 'Marija Novak',
            address: {
                street: 'Unknown street 001',
                city: 'Found City',
                region: 'vzhod',
                state: 'Slovaška'
            }
        },
        {
            id: 2,
            name: 'Zdrava Marija',
            address: {
                street: 'Forbidden street 001',
                city: 'Blue City',
                region: 'sever',
                state: 'Sibirija'
            }
        }
    ]
}