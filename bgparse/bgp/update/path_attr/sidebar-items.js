initSidebarItems({"constant":[["FLAG_EXT_LEN","Defines whether the Attribute Length is one octet (if set to 0) or two octets (if set to 1)."],["FLAG_OPTIONAL","Defines whether the attribute is optional (if set to 1) or well-known (if set to 0)"],["FLAG_PARTIAL","Defines whether the information contained in the optional transitive attribute is partial (if set to 1) or complete (if set to 0).  For well-known attributes and for optional non-transitive attributes, the Partial bit MUST be set to 0."],["FLAG_TRANSITIVE","Defines whether an optional attribute is transitive (if set to 1) or non-transitive (if set to 0). For well-known attributes, the Transitive bit MUST be set to 1."]],"enum":[["AsPathSegment",""],["ExtendedCommunity",""],["MpReachNlri","Multi Protocol Network Layer Reachability Information"],["MpUnreachNlri",""],["OriginType",""],["PathAttr",""]],"struct":[["Aggregator","AGGREGATOR is an optional transitive attribute, which MAY be included in updates that are formed by aggregation (see Section 9.2.2.2).  A BGP speaker that performs route aggregation MAY add the AGGREGATOR attribute, which SHALL contain its own AS number and IP address.  The IP address SHOULD be the same as the BGP Identifier of he speaker."],["Aigp","The Accumulated IGP Metric Attribute"],["As4Aggregator","Four-byte ASN version of Aggregator"],["As4Path","AsPath with four-byte-asns"],["AsPath","This attribute identifies the autonomous systems through which routing information carried in this UPDATE message has passed."],["AsPathIter",""],["AsSequence","AS_SEQUENCE: ordered set of ASes a route in the UPDATE message has traversed"],["AsSequenceIter",""],["AsSet","AS_SET: unordered set of ASes a route in the UPDATE message has traversed"],["AsSetIter",""],["AtomicAggregate","ATOMIC_AGGREGATE is a well-known discretionary attribute."],["AttrSet",""],["BgpLs","North-Bound Distribution of Link-State and TE Information"],["ClusterList","BGP Route Reflection"],["ClusterListIter",""],["Communities","BGP Community Attribute."],["Community",""],["CommunityIter",""],["ExtCommCosCapability",""],["ExtCommEvpn",""],["ExtCommExperimental",""],["ExtCommFlowSpec",""],["ExtCommFourOctetAsSpecific",""],["ExtCommIpv4AddrSpecific",""],["ExtCommOpaque",""],["ExtCommOther",""],["ExtCommQosMarking",""],["ExtCommRouteOrigin",""],["ExtCommRouteTarget",""],["ExtCommTwoOctetAsSpecific",""],["ExtendedCommunities","Extended Communities Attribute"],["ExtendedCommunityIter",""],["Ipv4Nexthop",""],["Ipv4Nlri",""],["Ipv4NlriIter",""],["Ipv4ReachNlri",""],["Ipv4UnreachNlri",""],["Ipv6AddrSpecificExtCommunity",""],["Ipv6Nexthop",""],["Ipv6Nlri",""],["Ipv6NlriIter",""],["Ipv6ReachNlri",""],["Ipv6UnreachNlri",""],["LocalPreference","LOCAL_PREF is a well-known attribute that SHALL be included in all UPDATE messages that a given BGP speaker sends to other internal peers."],["MultiExitDisc","The MULTI_EXIT_DISC is an optional non-transitive attribute that is intended to be used on external (inter-AS) links to discriminate among multiple exit or entry points to the same neighboring AS."],["NextHop","The NEXT_HOP is a well-known mandatory attribute that defines the IP address of the router that SHOULD be used as the next hop to the destinations listed in the UPDATE message."],["Origin","The ORIGIN attribute is generated by the speaker that originates the associated routing information. ORIGIN is a well-known mandatory attribute."],["OriginatorId","BGP Route Reflection"],["Other",""],["OtherReachNlri",""],["OtherUnreachNlri",""],["PathAttrIter",""],["PeDistinguisherLabels",""],["PmsiTunnel",""],["TrafficEngineering",""],["TunnelEncapAttr",""]],"trait":[["Attr",""],["ExtendedComm",""]]});