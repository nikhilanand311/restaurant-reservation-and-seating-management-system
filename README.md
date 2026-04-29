# # - restaurant reservation and seating management

<div align="center">

<img src="images/logo.png" alt="# Logo" width="300">

</div>

A comprehensive full-stack restaurant reservation and seating management built with Java Spring Boot, React (Vite.js), and MySQL. # provides a complete API service solution that restaurants can purchase and integrate into their operations, featuring multi-role dashboards and advanced reservation management capabilities. 
<br>

## 📋 Table of Contents

| Section              | Link                          |
|-----------------------|-------------------------------|
| About                | [About](#about)              |
| Features             | [Features](#features)        |
| Tech Stack           | [Tech Stack](#tech-stack)    |
| Architecture         | [Architecture](#architecture)|
| User Roles           | [User Roles](#user-roles)    |
| Screenshots          | [Screenshots](#screenshots)  |
| Installation         | [Installation](#installation)|
| Configuration        | [Configuration](#configuration)|
| API Documentation    | [API Documentation](#api-documentation)|
| Database Schema      | [Database Schema](#database-schema)|
| Usage                | [Usage](#usage)              |
| Contributing         | [Contributing](#contributing)|
| License              | [License](#license)          |
| Video Demo           | [Video Demo](#video-demo)    |


## 📖 About

# is a full-stack restaurant reservation and seating management designed as a comprehensive API service that restaurants can purchase and implement. The system features a layered architecture with RESTful APIs, supporting multiple user roles including Admin, Manager, Restaurant Owner, Customer, and Quota Manager. Each role has its own React-based dashboard with specific functionalities and permissions.

The system enables restaurants to:
- Manage table reservations efficiently
- Handle multiple restaurant locations
- Process payments and invoicing
- Analyze reservation data and revenue
- Provide customers with seamless booking experiences

## ✨ Features

### Core Functionality
- **Multi-role Authentication & Authorization** with JWT
- **Real-time Reservation Management** with calendar and list views
- **Table Management System** with capacity tracking
- **Session-based Booking** with time slot management
- **Payment Processing** with quota management
- **Invoice Generation** and financial tracking
- **Multi-restaurant Support** for restaurant chains
- **Cuisine and Location Management**
- **Revenue Analytics** and reporting
- **API Key Management** for external integrations

### Advanced Features
- **Automated Session Deactivation** for expired time slots
- **Email Notifications** for reservation confirmations
- **Responsive Design** across all devices
- **RESTful API Architecture** for easy integration
- **Comprehensive Admin Panel** for system management
- **Customer Reservation Portal** with external booking widgets

## 🛠 Tech Stack



### Frontend
- **React 18** - UI library
- **Vite.js** - Build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Bootstrap** - CSS framework
- **Font Awesome** - Icons


## 🏗 Architecture

The system follows a layered architecture pattern:

```
┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │
│   (React)       │◄──►│                 │
├─────────────────┤    ├─────────────────┤
│ • Components    │    │ • Controllers   │
│ • Services      │    │ • Services      │
│ • Routing       │    │ • Repositories  │
│ • State Mgmt    │    │ • Entities      │
└─────────────────┘    └─────────────────┘
                              │
                       ┌─────────────────┐
                       │     Mongodb     │
                       │   Database      │
                       └─────────────────┘
```

## 👥 User Roles

### 1. **Admin**
- System-wide management and oversight
- Manage managers, customers, and restaurants
- Configure pricing plans and system settings
- Monitor invoices and system analytics

### 2. **Manager**
- Oversee multiple restaurants
- Approve/deny restaurant registration requests
- Generate revenue reports and analytics
- Manage restaurant information updates

### 3. **Restaurant Owner**
- Manage restaurant details and table configurations
- Create and manage reservation sessions
- View reservations in calendar and list formats
- Handle payments and view current plans
- Access API keys for external integrations

### 4. **Customer**
- Browse and book restaurant reservations
- Manage personal reservation history
- Receive booking confirmations

### 5. **Quota Manager**
- Special role for managing reservation quotas
- Increase quota limits for restaurants
- Handle quota-related payments and upgrades

## 📚 Pages

### Promotion Pages
| Home | Pricing | Features | Contact | Login |
|------|---------|----------|---------|-------|
| ![Home](images/Home1.png) | ![Pricing](images/Pricing2.png) | ![Features](images/Features3.png) | ![Contact](images/Contact4.png) | ![Login](images/Login5.png) |

### Manager Dashboard
| Home | Restaurant List | Requests | Invoices | Revenue | Change Password |
|------|----------------|----------|----------|---------|----------|
| ![Manager Home](images/ManagerHome1.png) | ![Restaurant List](images/ManagerRestaurantList2.png) | ![Requests](images/ManagerRestaurantRequest3.png) | ![Invoices](images/ManagerInvoices4.png) | ![Revenue](images/ManagerRevenue5.png) | ![Change Password](images/ManagerChangePassword6.png) |

### Admin Dashboard
| Home | Manager List | Edit Prices | Location List |
|------|-------------|-------------|---------------|
| ![Admin Home](images/AdminHome1.png) | ![Manager List](images/AdminManagerList2.png) | ![Edit Prices](images/AdminEditPrices3.png) | ![Location List](images/AdminLocationList4.png) |

### Restaurant Owner Dashboard
| Home | Update Restaurant | Table Info | Create Sessions |
|------|------------------|------------|-----------------|
| ![Owner Home](images/RestoranOwnerHome1.png) | ![Update Restaurant](images/RestaurantOwnerUpdateRestaurant2.png) | ![Table Info](images/RestorantOwnerTableInformation3.png) | ![Create Sessions](images/RestorantOwnerCreateSession4.png) |

| Calendar View | API Key | Your Plan | Update Profile |
|---------------|---------|-----------|----------------|
| ![Calendar](images/RestorantOwnerCalender5.png) | ![API Key](images/RestorantOwnerApiKey6.png) | ![Your Plan](images/RestaurantOwnerYourPlan7.png) | ![Update Profile](images/RestorantOwnerUpdateProfile8.png) |

### Quota Management
| Quota User | Payment |
|------------|---------|
| ![Quota User](images/QuatoUser1.png) | ![Payment](images/QuotaPayment2.png) |

### Customer Interface
| Booking Interface | Reservation Details |
|------------------|-------------------|
| ![Customer 1](images/Customer1.png) | ![Customer 2](images/Customer2.png) |

## 🚀 Installation




### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd #-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```


```






The system uses a relational database design with the following key entities:

- **user-info**: User accounts and authentication
- **restaurant-info**: Restaurant details and configuration
- **table-info**: Table capacity and availability
- **session-info**: Time slots for reservations
- **reservation-info**: Booking details and customer information
- **payment**: Payment plans and quota management
- **invoices**: Financial transactions and billing
- **cuisine**: Restaurant cuisine types
- **location**: Geographic locations

## 📖 Usage

### For Restaurant Owners

1. **Register your restaurant** through the manager approval process
2. **Configure tables** and their capacities
3. **Create time sessions** for available booking slots
4. **Monitor reservations** through calendar and list views
5. **Manage payments** and view your current plan
6. **Access API keys** for external integrations

### For Customers

1. **Browse restaurants** by location and cuisine
2. **Select available time slots** from the calendar
3. **Make reservations** with party size and special requests
4. **Receive confirmation** via email
5. **Manage bookings** through the customer portal

### For Managers

1. **Review restaurant applications** and approve/deny requests
2. **Monitor system usage** and generate reports
3. **Manage restaurant information** and updates
4. **Analyze revenue** and system performance

## 🤝 Contributing

We welcome contributions to #! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style Guidelines

- Follow Java naming conventions for backend code
- Use ESLint and Prettier for frontend code formatting
- Write meaningful commit messages
- Add unit tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 # Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
#   r e s t a u r a n t - r e s e r v a t i o n - a n d - s e a t i n g - m a n a g e m e n t - s y s t e m  
 