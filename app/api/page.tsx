// This page displays api key and allows you to copy it to clipboard
// This page also show your stat from: https://api.allnepalinews.com/subscription?apiKey=your-uid

'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { ClipboardCopyIcon, CheckIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

type SubscriptionData = {
  status: string;
  subscription: {
    billing_period: {
      start: string;
      end: string;
    };
    current_month: string;
    last_request: string;
    monthly_limit: number;
    remaining_requests: number;
    status: string;
    total_requests_all_time: number;
    total_requests_current_month: number;
    user_id: string;
  };
};

export default function ApiPage() {
  const { user, loading } = useAuth();
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState<SubscriptionData | null>(null);
  const [statsLoading, setStatsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;
      
      setStatsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://api.allnepalinews.com/subscription?apiKey=${user.uid}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch stats: ${response.status}`);
        }
        
        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError('Failed to load subscription stats. Please try again later.');
      } finally {
        setStatsLoading(false);
      }
    };

    if (user) {
      fetchStats();
    }
  }, [user]);

  const copyToClipboard = () => {
    if (user) {
      navigator.clipboard.writeText(user.uid);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  if (loading) {
    return (
      <div className="container max-w-4xl mx-auto py-12 px-4 mt-24">
        <h1 className="text-3xl font-bold mb-8">API Access</h1>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your API information...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container max-w-4xl mx-auto py-12 px-4 mt-24">
        <h1 className="text-3xl font-bold mb-8">API Access</h1>
        <Card>
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              You need to be signed in to access your API key and subscription information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Please sign in with your Google account to view your API key and usage statistics.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 mt-24">
      <h1 className="text-3xl font-bold mb-8">API Access</h1>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Your API Key</CardTitle>
            <CardDescription>
              Use this key to authenticate your requests to the All Nepali News API.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-md flex-1 font-mono text-sm overflow-x-auto">
                {user.uid}
              </div>
              <Button 
                onClick={copyToClipboard} 
                variant="outline"
                className="flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <ClipboardCopyIcon className="h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Keep this key secure and do not share it publicly.
            </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Subscription Statistics</CardTitle>
            <CardDescription>
              Your current API usage and subscription details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {statsLoading ? (
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ) : error ? (
              <div className="p-4 bg-destructive/10 text-destructive rounded-md">
                {error}
              </div>
            ) : stats?.subscription ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Subscription Status</h3>
                    <p className="text-lg font-semibold capitalize">{stats.subscription.status}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Monthly Limit</h3>
                    <p className="text-lg font-semibold">{stats.subscription.monthly_limit.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium mb-3">Current Billing Period</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Start Date</p>
                      <p className="font-medium">{formatDate(stats.subscription.billing_period.start)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">End Date</p>
                      <p className="font-medium">{formatDate(stats.subscription.billing_period.end)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Usage This Month</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ 
                            width: `${Math.min(100, (stats.subscription.total_requests_current_month / stats.subscription.monthly_limit) * 100)}%` 
                          }}
                        ></div>
                      </div>
                      <span className="text-sm whitespace-nowrap">
                        {stats.subscription.total_requests_current_month} / {stats.subscription.monthly_limit}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stats.subscription.remaining_requests.toLocaleString()} requests remaining
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Requests (All Time)</h3>
                      <p className="text-lg font-semibold">{stats.subscription.total_requests_all_time.toLocaleString()}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Last Request</h3>
                      <p className="text-sm">{stats.subscription.last_request}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">No subscription data available.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Documentation</CardTitle>
            <CardDescription>
              Learn how to use the All Nepali News API.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our API provides access to the latest news from Nepal. Use your API key to authenticate requests.
            </p>
            <div className="bg-muted p-4 rounded-md font-mono text-sm overflow-x-auto">
              <pre>GET https://api.allnepalinews.com/news?apiKey={user.uid}</pre>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => window.open('/docs', '_blank')}>
              View Full Documentation
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

