-- Create the leads table for storing form submissions
CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  service VARCHAR(100),
  budget VARCHAR(100),
  timeline VARCHAR(100),
  message TEXT,
  form_type VARCHAR(50) NOT NULL, -- 'contact', 'booking', 'newsletter'
  status VARCHAR(50) DEFAULT 'new', -- 'new', 'contacted', 'qualified', 'converted', 'lost'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notes TEXT,
  preferred_date VARCHAR(50),
  preferred_time VARCHAR(50),
  timezone VARCHAR(50),
  meeting_type VARCHAR(100)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_form_type ON leads(form_type);

-- Insert some sample data for testing (optional)
INSERT INTO leads (name, email, phone, company, service, budget, timeline, message, form_type, status) VALUES
('John Doe', 'john@example.com', '+1234567890', 'Tech Corp', 'Web Development', '$25,000 - $50,000', '3-6 months', 'Looking for a new website for our company', 'contact', 'new'),
('Jane Smith', 'jane@example.com', '+0987654321', 'Startup Inc', 'Mobile App Development', '$10,000 - $25,000', '1-3 months', 'Need a mobile app for our startup', 'booking', 'contacted'),
('Newsletter Subscriber', 'subscriber@example.com', NULL, NULL, NULL, NULL, NULL, 'Newsletter subscription from: subscriber@example.com', 'newsletter', 'new'); 