'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, CheckCircle, XCircle, Clock, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  form_type: string;
  status: string;
  created_at: string;
  updated_at: string;
  notes: string;
  preferred_date?: string;
  preferred_time?: string;
  timezone?: string;
  meeting_type?: string;
}

const LeadsPageClient = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingLead, setUpdatingLead] = useState<number | null>(null);
  const { toast } = useToast();

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/leads');
      const data = await response.json();
      
      if (data.success) {
        setLeads(data.leads);
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch leads. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch leads. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateLeadStatus = async (leadId: number, status: string, notes: string) => {
    setUpdatingLead(leadId);
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status, notes }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Update the lead in the local state
        setLeads(prev => prev.map(lead => 
          lead.id === leadId 
            ? { ...lead, status, notes, updated_at: new Date().toISOString() }
            : lead
        ));
        
        toast({
          title: "Success",
          description: "Lead status updated successfully.",
        });
      } else {
        throw new Error('Failed to update');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update lead status.",
        variant: "destructive",
      });
    } finally {
      setUpdatingLead(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'converted': return 'bg-purple-100 text-purple-800';
      case 'lost': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <Clock className="w-4 h-4" />;
      case 'contacted': return <MessageSquare className="w-4 h-4" />;
      case 'qualified': return <User className="w-4 h-4" />;
      case 'converted': return <CheckCircle className="w-4 h-4" />;
      case 'lost': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Lead Management</h1>
          <Button 
            onClick={fetchLeads} 
            disabled={loading}
            variant="outline"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        <div className="grid gap-6">
          {leads.map((lead) => (
            <Card key={lead.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      {lead.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </span>
                      {lead.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {lead.phone}
                        </span>
                      )}
                      {lead.company && (
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {lead.company}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(lead.status)}>
                      {getStatusIcon(lead.status)}
                      <span className="ml-1 capitalize">{lead.status}</span>
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {lead.form_type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-semibold text-gray-700">Service</Label>
                      <p className="text-sm text-gray-600">{lead.service || 'Not specified'}</p>
                    </div>
                    
                    {lead.budget && (
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Budget</Label>
                        <p className="text-sm text-gray-600">{lead.budget}</p>
                      </div>
                    )}
                    
                    {lead.timeline && (
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Timeline</Label>
                        <p className="text-sm text-gray-600">{lead.timeline}</p>
                      </div>
                    )}

                    {lead.form_type === 'booking' && (
                      <div className="space-y-2">
                        {lead.preferred_date && (
                          <div>
                            <Label className="text-sm font-semibold text-gray-700">Preferred Date</Label>
                            <p className="text-sm text-gray-600">{lead.preferred_date}</p>
                          </div>
                        )}
                        {lead.preferred_time && (
                          <div>
                            <Label className="text-sm font-semibold text-gray-700">Preferred Time</Label>
                            <p className="text-sm text-gray-600">{lead.preferred_time}</p>
                          </div>
                        )}
                        {lead.timezone && (
                          <div>
                            <Label className="text-sm font-semibold text-gray-700">Timezone</Label>
                            <p className="text-sm text-gray-600">{lead.timezone}</p>
                          </div>
                        )}
                        {lead.meeting_type && (
                          <div>
                            <Label className="text-sm font-semibold text-gray-700">Meeting Type</Label>
                            <p className="text-sm text-gray-600">{lead.meeting_type}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    {lead.message && (
                      <div>
                        <Label className="text-sm font-semibold text-gray-700">Message</Label>
                        <p className="text-sm text-gray-600 whitespace-pre-wrap">{lead.message}</p>
                      </div>
                    )}

                    <div>
                      <Label className="text-sm font-semibold text-gray-700">Status Update</Label>
                      <div className="flex gap-2 mt-2">
                        <Select 
                          defaultValue={lead.status}
                          onValueChange={(value) => updateLeadStatus(lead.id, value, lead.notes || '')}
                          disabled={updatingLead === lead.id}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="qualified">Qualified</SelectItem>
                            <SelectItem value="converted">Converted</SelectItem>
                            <SelectItem value="lost">Lost</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-semibold text-gray-700">Notes</Label>
                      <Textarea
                        value={lead.notes || ''}
                        onChange={(e) => updateLeadStatus(lead.id, lead.status, e.target.value)}
                        placeholder="Add notes about this lead..."
                        className="mt-2"
                        disabled={updatingLead === lead.id}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Created: {formatDate(lead.created_at)}</span>
                    <span>Updated: {formatDate(lead.updated_at)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {leads.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <MessageSquare className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No leads yet</h3>
              <p className="text-gray-600">Leads will appear here once forms are submitted.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LeadsPageClient;
