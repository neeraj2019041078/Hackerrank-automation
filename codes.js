module.exports={
    answers:[
        `#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */  
            int n,i,a[10000],sum=0;
            cin>>n;
            for(int i=0;i<n;i++)
                {cin>>a[i];sum+=a[i];}
            cout<<sum;
            return 0;
        }
        
        `,`#include <cmath>
        #include <cstdio>
        #include <vector>
        #include <iostream>
        #include <algorithm>
        using namespace std;
        
        
        int main() {
            /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
            int i,n,sum;
            cin>>n;
            int a[n];
            for(i=0; i<n; i++){
                cin>>a[i];
            }
            sum = 0;
            for(i=0; i<n; i++){
                sum = sum + a[i];
            }
            cout<<sum;
            return 0;
        }`
    ]
}