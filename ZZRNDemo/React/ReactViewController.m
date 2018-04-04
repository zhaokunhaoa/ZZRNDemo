//
//  ReactViewController.m
//  NamiboxRN
//
//  Created by 相颖 on 2018/4/4.
//  Copyright © 2018年 相颖. All rights reserved.
//

#import "ReactViewController.h"
#import <React/RCTRootView.h>


@interface ReactViewController ()

@end

@implementation ReactViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSString * strUrl = @"http://localhost:8081/Main.bundle?platform=ios&dev=true";
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"ZZRNDemo"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    self.view = rootView;
}


@end
