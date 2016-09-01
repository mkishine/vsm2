#!/usr/local/bin/perl5.12
use strict;
use DataObject;
use Date::Parse;
use JSON;

use Data::Dumper;
$Data::Dumper::Indent = 1;

my $dobj = new DataObject();
$dobj->SetDBIdent("DSREAD");
my $gen_stat_tbl = $dobj->GetTbl("gen_stat");
my $query = << "__QUERY__";
   select  client,
           module as "app_server",
           submodule as "report_type",
           convert(char(40), asof_date, 140) as "asof_date",
           key_1 as "report",
           key_2 as "port",
           key_3 as "user",
           key_4 as "host",
           key_5 as "flags",
           data_1 as "req_time",
           data_4 as "pid",
           data_8 as "req_no"
     from  $gen_stat_tbl
    where  module like "VARServer%"
      and  tag_def = "VARServer_v_2"
      and  (convert(integer, key_5)&4)/4 = 0 -- ignore batch requests, see GenStat.H
      and  asof_date between "20160831 9:00" and "20160831 10:00"
__QUERY__
my $results = $dobj->DoSql($query);
# print Dumper($results);

my @l;
my @h = qw(client, app_server, report_type, asof_date, report, port, user, host, flags, req_time, pid, req_no);
push @l, \@h;

for my $r (@{$results}) {
    map { $r->{$_} =~ s/ +$// } keys %{$r};
    push @l, [
        $r->{client}, 
        $r->{app_server},
        $r->{report_type},
        str2time($r->{asof_date})*1000,
        $r->{report},
        $r->{port},
        $r->{user},
        $r->{host},
        $r->{flags},
        $r->{req_time},
        $r->{pid},
        $r->{req_no},
    ];
}
# print Dumper(\@l);
print encode_json(\@l);
