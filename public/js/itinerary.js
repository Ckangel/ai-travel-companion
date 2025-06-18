// Sample itinerary data
const itineraryTemplates = {
    business: {
        northAmerica: [
            {
                day: "Day 1: Arrival and Meetings",
                activities: [
                    { time: "09:00 AM", title: "Arrival at Airport", description: "Meet your driver for transfer to hotel" },
                    { time: "11:00 AM", title: "Hotel Check-in", description: "Settle in and prepare for meetings" },
                    { time: "01:00 PM", title: "Lunch Meeting", description: "Networking lunch with potential clients" },
                    { time: "03:00 PM", title: "Office Tour", description: "Visit local office and meet the team" },
                    { time: "07:00 PM", title: "Dinner", description: "Business dinner at upscale restaurant" }
                ]
            },
            {
                day: "Day 2: Conference Day",
                activities: [
                    { time: "08:00 AM", title: "Breakfast", description: "Hotel breakfast" },
                    { time: "09:00 AM", title: "Conference", description: "Attend industry conference sessions" },
                    { time: "12:00 PM", title: "Lunch", description: "Conference lunch" },
                    { time: "01:00 PM", title: "Workshops", description: "Participate in afternoon workshops" },
                    { time: "06:00 PM", title: "Networking Event", description: "Evening networking reception" }
                ]
            }
        ],
        europe: [
            // Similar structure for Europe business trips
        ]
    },
    culture: {
        europe: [
            {
                day: "Day 1: Arrival and City Tour",
                activities: [
                    { time: "09:00 AM", title: "Arrival", description: "Arrive at destination airport" },
                    { time: "11:00 AM", title: "Hotel Check-in", description: "Drop bags and freshen up" },
                    { time: "12:30 PM", title: "Lunch", description: "Local cuisine at recommended restaurant" },
                    { time: "02:00 PM", title: "Walking Tour", description: "Guided tour of historic city center" },
                    { time: "07:00 PM", title: "Dinner", description: "Traditional meal at local tavern" }
                ]
            }
        ]
    },
    // More templates for other trip types and regions
};

// Generate itinerary based on trip type and region
export async function generateItinerary(tripType, region, destination = '') {
    // In a real app, this would call an AI service or more sophisticated algorithm
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Get template based on trip type and region
        let itinerary = itineraryTemplates[tripType]?.[region];
        
        // If no specific template, use a default
        if (!itinerary) {
            itinerary = [
                {
                    day: "Day 1: Arrival and Exploration",
                    activities: [
                        { time: "10:00 AM", title: "Arrival", description: "Arrive at your destination" },
                        { time: "12:00 PM", title: "Lunch", description: "Enjoy local cuisine" },
                        { time: "02:00 PM", title: "Sightseeing", description: "Visit popular attractions" },
                        { time: "07:00 PM", title: "Dinner", description: "Dine at a recommended restaurant" }
                    ]
                },
                {
                    day: "Day 2: Full Day Experience",
                    activities: [
                        { time: "09:00 AM", title: "Breakfast", description: "Start your day with local specialties" },
                        { time: "10:00 AM", title: "Cultural Activity", description: "Participate in a cultural workshop" },
                        { time: "01:00 PM", title: "Lunch", description: "Try another local restaurant" },
                        { time: "03:00 PM", title: "Guided Tour", description: "Learn about the area from a local guide" }
                    ]
                }
            ];
        }
        
        // Customize with destination if provided
        if (destination) {
            itinerary = itinerary.map(day => ({
                ...day,
                day: day.day.replace('Arrival', `Arrival in ${destination}`),
                activities: day.activities.map(activity => ({
                    ...activity,
                    description: activity.description.replace('local', `${destination}'s`)
                }))
            }));
        }
        
        return itinerary;
    } catch (error) {
        console.error('Error generating itinerary:', error);
        throw error;
    }
}

// Function to get hotel suggestions for itinerary
export async function getHotelSuggestions(location, budget) {
    // In a real app, this would call a hotel API
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Return mock data
        return [
            {
                name: `${location} Grand Hotel`,
                rating: "5 stars",
                price: budget === 'luxury' ? "$350/night" : "$200/night",
                amenities: ["Pool", "Spa", "Restaurant"],
                image: "images/hotel1.jpg"
            },
            {
                name: `${location} Plaza`,
                rating: "4 stars",
                price: budget === 'luxury' ? "$280/night" : "$150/night",
                amenities: ["Gym", "Free Breakfast", "Business Center"],
                image: "images/hotel2.jpg"
            }
        ];
    } catch (error) {
        console.error('Error fetching hotel suggestions:', error);
        throw error;
    }
}
